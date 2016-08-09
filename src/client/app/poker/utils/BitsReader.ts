import {ArrayBufferBuilder} from "./ArrayBufferBuilder";

export class BitsReader {

	/** The position of the byte in the buffer from which bits are read/written **/
	protected currentBytePosition: number;

	/** The bit position in the current byte **/
	public bitPosition: number;

	/** The buffer from which bits are read/written **/
	protected buffer: ArrayBufferBuilder;

	/** The current byte taken from the buffer from which bits are read/written **/
	protected currentByte: number


    /**
     * Creates an ArrayBuffer with the specified size in bytes.
     *
     * @param {number} sizeInBytes - The size of the created buffer in bytes.
     * @param {ArrayBufferBuilder} buffer? - The buffer used to write/read to.
     * @param {boolean} createCopy? - If false writes/reads directly to the passed in buffer. If true creates a copy and writes/reads to it.
     */
    constructor(buffer: ArrayBufferBuilder) {
		//this.capacityInBits = BitsUtil.getBitsFromBytes(sizeInBytes);

        this.buffer = buffer;
		this.currentByte = undefined;
		this.currentBytePosition = -1;
		this.bitPosition = 0;
    }

    /**
     * Sets the value of the bit at the current or specified position.
     *
     * @param {number | boolean} value - (0 or 1)
     * @param {number} position?
     */
    public setBit(value: number | boolean, position?: number): void {
		if (this.currentByte === undefined || this.currentBytePosition != this.buffer.pointer - 1) {
			this.bitPosition = 0;
			this.currentBytePosition = this.buffer.pointer
			this.currentByte = 0;

			// the buffers pointer shuld always be 1 greater than the currentBytePosition
			this.buffer.pointer = this.currentBytePosition + 1;
		}

		this.bitPosition = position || this.bitPosition;

		if (this.bitPosition >= Consts.BITS_IN_BYTE || this.bitPosition < 0) {
			var bytesShift = Math.floor(this.bitPosition / Consts.BITS_IN_BYTE);
			this.currentBytePosition += bytesShift;
			this.buffer.pointer += bytesShift;

			this.bitPosition = this.bitPosition % Consts.BITS_IN_BYTE;
		}

        var bitMask: number = 1 << this.bitPosition

        if (value) {
            this.currentByte |= bitMask;
        } else {
            this.currentByte &= ~bitMask;
        }

		this.buffer.pointer--;

		this.buffer.setUint8(this.currentByte);

        this.bitPosition++;
    }

    /**
     * Returns the value of the bit (0 or 1) at the current or specified position.
     *
     * @param {number} position?
     */
    public getBit(position?: number): number {
		var readNewByte: boolean = false;

		if (this.currentByte === undefined || this.currentBytePosition != this.buffer.pointer - 1) {
			this.bitPosition = 0;
			this.currentBytePosition = this.buffer.pointer

			readNewByte = true;
		}

		this.bitPosition = position || this.bitPosition;

		if (this.bitPosition >= Consts.BITS_IN_BYTE || this.bitPosition < 0) {
			var bytesShift = Math.floor(this.bitPosition / Consts.BITS_IN_BYTE);
			this.currentBytePosition += bytesShift;
			this.buffer.pointer = this.currentBytePosition;		//the +1 offset will be added when the byte is read.

			this.bitPosition = this.bitPosition % Consts.BITS_IN_BYTE;

			readNewByte = true;
		}

		if (readNewByte) {
			// reading one byte will fulfil the requirement that the buffers pointer shuld always be 1 greater than the currentBytePosition
			this.currentByte = this.buffer.getUint8();
		}

		var bitMask: number = 1 << this.bitPosition
		var byte: number = this.currentByte & bitMask;

        this.bitPosition++;

        return byte ? 1 : 0;
    }

	/**
	 * Sets the value of the bits depending on the specified bitsCount at the current or specified position.
	 *
	 * @param {number | boolean} data - (at most 32 bit uint)
	 * @param {number} bitsCount?
	 * @param {number} position?
	 */
	public setBits(data: number | boolean, bitsCount?: number, position?: number): void {
		this.bitPosition = position || this.bitPosition;

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
	}

	/**
	 * Returns the value of the bits depending on the specified bitsCount at the current or specified position.
	 *
	 * @param {number} bitsCount
	 * @param {number} position?
	 */
	public getBits(bitsCount: number, position?: number): number {
		this.bitPosition = position || this.bitPosition;

		var result: number = 0;
		var bit: number;

		for (var i = 0; i < bitsCount; i++) {
			bit = this.getBit();

			if (bit) {
				result |= (1 << i);
			}
		}

		return result;
	}

	/**
	 * Use this function to write this buffer to another one, in case this buffer is a new instance or a copy.
	 *
	 * @param {Utils.ArrayBufferBuilder} buffer
	 */
	/*public write(buffer: Utils.ArrayBufferBuilder): number {
        var oldPointer: number = buffer.pointer

        buffer.setDataView(this.bytesBuffer)

		return buffer.pointer - oldPointer;
	}*/

	/**
	 * Use this function to read data specified in bytes from the specified buffer into this buffer.
	 *
	 * @param {Utils.ArrayBufferBuilder} buffer
	 * @param {number = 1} bytes - bytes to read
	 */
	/*public read(buffer: Utils.ArrayBufferBuilder, bytes: number = 1): number {
        var oldPointer: number = buffer.pointer;

		this.bytesBuffer = new Uint8Array(buffer.getBufferSlice(buffer.pointer, buffer.pointer + bytes));

		return buffer.pointer - oldPointer;
	}*/


}

const enum Consts {
	BITS_IN_BYTE = 8
}
