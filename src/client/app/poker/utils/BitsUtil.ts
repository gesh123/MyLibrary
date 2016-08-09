

export class BitsUtil {

	/** Returns the number of bits in bytes. */
	public static getBitsFromBytes(bytes: number) {
		return bytes * Consts.BITS_IN_BYTE;
	}

	/** Returns the number of bytes from bits depending on the wordSize. */
	public static getWordsFromBitsAndWordSize(bits: number, wordSize: number) {
		return Math.floor(bits / wordSize) + ((bits % wordSize > 0) ? 1 : 0);
	}

	/** Returns the number of bytes from bits. */
	public static getBytesFromBits(bits: number) {
		return this.getWordsFromBitsAndWordSize(bits, Consts.BITS_IN_BYTE);
	}

	/** Returns the number for the bit mask from startBit and bitsCount. */
	public static getBitMaskFromStartBitAndBitsCount(startBit: number, bitsCount: number) {
		return ((1 << bitsCount) - 1) << startBit;
	}
}

const enum Consts {
	BITS_IN_BYTE = 8		
}
