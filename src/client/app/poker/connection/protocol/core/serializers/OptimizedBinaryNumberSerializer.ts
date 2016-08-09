

import {ArrayBufferBuilder} from "../../../../utils/ArrayBufferBuilder";
import {Int64} from "../../../../utils/Int64";
/**
 * This serializer is used to read optimized binary numbers.
 * It used Int64 as helper class (it has methods for reading writing ptimized numbers).
 * An optimized number is sotren in 1 to 9 bytes.
 * If the first byte is 0 the number is 0.
 * If not its absolute value is the number of bytes in which the vlaue is stored (as an uint)
 * if the first byte is negative the value is negative.
 */
export class OptimizedBinaryNumberSerializer {

	/**
	 * Writes(serializes) a number in optimized format into ArrayBufferBuilder.
	 *
	 * @param {ArrayBufferBuilder} buffer the stream/buffer/byte array where the serialized optimized number will be written
	 * @param {number} data the number which have to be optimzied/compressed and written into the buffer
	 */
	public static serialize(buffer: ArrayBufferBuilder, data: number): void {
		var int64 = new Int64();

		int64.value = data;

		int64.writeOptimized(buffer);
	}

	/**
	 * Reades(deserializes) an optimized number from ArrayBufferBuilder
	 *
	 * @param {ArrayBufferBuilder} buffer the stream/buffer/byte array from which the number will be read
	 * @returns the number read from the ArrayBufferBuilder
	 */
	public static deserialize(buffer: ArrayBufferBuilder): number {
		var int64 = new Int64();

		int64.readOptimized(buffer);

		return int64.value;
	}
}
