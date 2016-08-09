
import {ArrayBufferBuilder} from "./ArrayBufferBuilder";
export class BitsArray {

	//private capacityInBits: number;

	/** This value is the size of each element (word) in the Uint8Array, which is 1 byte (0xFF). */
	//public static bitsArrayWordBytes: number = 1;

	/** This value is the size of bitsArrayWordBytes in bits. */
	//public static bitsArrayWordBits: number = 8;

    /** The underlying bitsArray Uint8Array on which the setting and getting of bits is done. */
    public bytesBuffer: Uint8Array;

    /** The position in the bitsArray. */
    public position: number;
	

    /**
     * Creates an ArrayBuffer with the specified size in bytes. 
     * 
     * @param {number} sizeInBytes - The size of the created buffer in bytes.
     * @param {ArrayBufferBuilder} buffer? - The buffer used to write/read to.
     * @param {boolean} createCopy? - If false writes/reads directly to the passed in buffer. If true creates a copy and writes/reads to it.
     */
    constructor(sizeInBytes: number, buffer?: ArrayBufferBuilder, createCopy?: boolean) {
		//this.capacityInBits = BitsUtil.getBitsFromBytes(sizeInBytes);

        var ab: ArrayBuffer;

        if (buffer) {
			if (createCopy) {
				this.read(buffer, sizeInBytes);
			} else {
				buffer.ensureHasFreeSpace(sizeInBytes);
				this.bytesBuffer = new Uint8Array(buffer.view.buffer, buffer.view.byteOffset + buffer.pointer, sizeInBytes);
				buffer.pointer += sizeInBytes;
			}

        } else {
            ab = new ArrayBuffer(sizeInBytes);
			this.bytesBuffer = new Uint8Array(ab);
        }

        
        this.position = 0;
    }

    /**
     * Sets the value of the bit at the current or specified position.
     * 
     * @param {number | boolean} value - (0 or 1)
     * @param {number} position?
     */
    public setBit(value: number | boolean, position?: number): void {
        position = position || this.position;
		
        var bytePosition: number = Math.floor(position / Consts.BITS_IN_BYTE);
        var bitMask: number = 1 << (position % Consts.BITS_IN_BYTE);

        if (value) {
            this.bytesBuffer[bytePosition] |= bitMask;
        } else {
            this.bytesBuffer[bytePosition] &= ~bitMask;
        }

        this.position++;
    }

    /**
     * Returns the value of the bit (0 or 1) at the current or specified position.
     * 
     * @param {number} position?
     */
    public getBit(position?: number): number {
        position = position || this.position;

        var bytePosition: number = Math.floor(position / Consts.BITS_IN_BYTE);
        var bitMask: number = 1 << (position % Consts.BITS_IN_BYTE);
        var byte: number = this.bytesBuffer[bytePosition] & bitMask;

        this.position++;

        return byte;
    }

	/**
	 * Sets the value of the bits depending on the specified bitsCount at the current or specified position.
	 * 
	 * @param {number | boolean} data - (at most 32 bit uint)
	 * @param {number} bitsCount?
	 * @param {number} position?
	 */
	public set(data: number | boolean, bitsCount?: number, position?: number): void {
		this.position = position || this.position;

		var value: number;
		var bit: boolean;

		if (typeof data === "boolean") {
			value = data ? 1 : 0;
		} else if (!data) {
			value = 0;
		} else {
			value = data;
		}
		
		for (var i = 0; i < bitsCount; i++) {
			bit = (value & (1 << i)) != 0;

			this.setBit(bit);
		}
		
		/*var valToWrite: number = value & Utils.BitsUtil.getBitMaskFromStartBitAndBitsCount(0, bitsCount);

		var writtenBits: number = 0;

		while (bitsCount - writtenBits > 0) {
			var shelfWord: number = this.getCurrentWord();
			var bitsLeftToWrite: number = bitsCount - writtenBits;
			var bitsToWrite: number = Math.min(bitsLeftToWrite, this.getCurrentWordFreeBits());
			var currentWordBitPos: number = this.getBitPosInCurrentWord();

			shelfWord |= ((valToWrite & Utils.BitsUtil.getBitMaskFromStartBitAndBitsCount(writtenBits, bitsToWrite)) >> writtenBits) << currentWordBitPos;
			this.position += bitsToWrite;
			writtenBits += bitsToWrite;
		}*/
	}

	/**
	 * Returns the value of the bits depending on the specified bitsCount at the current or specified position.
	 * 
	 * @param {number} bitsCount
	 * @param {number} position?
	 */
	public get(bitsCount: number, position?: number): number {
		this.position = position || this.position;

		var result: number = 0;
		var bit: number;

		for (var i = 0; i < bitsCount; i++) {
			bit = this.getBit();

			if (bit) {
				result |= (1 << i);
			}
		}

		return result;

		/*
		var readVal: number = 0;
		var readBits: number = 0;
		while (bitsCount - readBits > 0) {
			var bitsArrayWord: number = this.getCurrentWord();
			var bitsLeftToWrite: number = bitsCount - readBits;
			var bitsArrayWordUnreadBits: number = this.getCurrentWordFreeBits();
			var bitsToRead: number = Math.min(bitsLeftToWrite, bitsArrayWordUnreadBits);
			var currentWordBitPos: number = this.getBitPosInCurrentWord();

			readVal |= ((bitsArrayWord & Utils.BitsUtil.getBitMaskFromStartBitAndBitsCount(currentWordBitPos, bitsToRead)) >> currentWordBitPos) << readBits;
			this.position += bitsToRead;
			readBits += bitsToRead;
		}

		return readVal;
		*/
	}

	/**
	 * Use this function to write this buffer to another one, in case this buffer is a new instance or a copy.
	 * 
	 * @param {Utils.ArrayBufferBuilder} buffer
	 */
	public write(buffer: ArrayBufferBuilder): number {
        var oldPointer: number = buffer.pointer

        buffer.setDataView(this.bytesBuffer)

		return buffer.pointer - oldPointer;
	}

	/**
	 * Use this function to read data specified in bytes from the specified buffer into this buffer.
	 * 
	 * @param {Utils.ArrayBufferBuilder} buffer
	 * @param {number = 1} bytes - bytes to read
	 */
	public read(buffer: ArrayBufferBuilder, bytes: number = 1): number {
        var oldPointer: number = buffer.pointer;

		this.bytesBuffer = new Uint8Array(buffer.getBufferSlice(buffer.pointer, buffer.pointer + bytes));

		return buffer.pointer - oldPointer;
	}

	/** Returns the remaining bits depending on the predefined capacity. */
	/*private getBitsArrayRemainingBits(): number {
		return this.capacityInBits - this.position;
	}*/

	/** Returns the bit position in the current element (word) in the bitsArray. */
	/*private getBitPosInCurrentWord(): number {
		return this.position % BitsArray.bitsArrayWordBits;
	}*/

	/** Returns the value of the element (word) in the bitsArray depending on where the position is. */
	/*private getCurrentWord(): number {
		return this.bytesBuffer[Math.floor(this.position / BitsArray.bitsArrayWordBits)];
	}*/

	/** Returns the free bits in the current element (word) in the bitsArray. */
	/*private getCurrentWordFreeBits(): number {
		return Math.min(BitsArray.bitsArrayWordBits, this.capacityInBits) - this.getBitPosInCurrentWord();
	}*/

}

const enum Consts {
	BITS_IN_BYTE = 8
}
