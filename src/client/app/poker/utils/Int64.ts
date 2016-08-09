

import {MathUtil} from "./MathUtil";
import {ArrayBufferBuilder} from "./ArrayBufferBuilder";
export class Int64 {

	/** First 32 bit integer. */
	public high: number;

	/** Second 32 bit integer. */
	public low: number;


	/**
	* A class to support 64 bit integers.
	* 
	* @param {ArrayBufferBuilder} buffer
	*/
	constructor(buffer: ArrayBufferBuilder);
	/**
	* A class to support 64 bit integers.
	* 
	* @param {number} high First 32 bit integer.
	* @param {number} low Second 32 bit integer.
	*/
	constructor(high?: number, low?: number);
	constructor(data: number | ArrayBufferBuilder = 0, low: number = 0) {
		if (data instanceof ArrayBufferBuilder) {
			this.read(data)
		} else {
			this.high = <number>data;
			this.low = low;
		}
	}

	public write(buffer: ArrayBufferBuilder): number {
		var oldPointer: number = buffer.pointer

		buffer.setInt32(this.high);
		buffer.setUint32(this.low);

		return buffer.pointer - oldPointer;
	}

	public read(buffer: ArrayBufferBuilder): number {
		var oldPointer: number = buffer.pointer

		this.high = buffer.getInt32();
		this.low = buffer.getUint32();
		
		return buffer.pointer - oldPointer;
	}

	public writeOptimized(buffer: ArrayBufferBuilder): number {
		var oldPointer: number = buffer.pointer

		var header: number = 0;
		var value: number = this.value
		var sign: number = (value < 0) ? 1 : 0;
		var size: number = 1;
		var byte: number = 0xFF;	// 255
		var pow: number = 1;
		var absValue: number = Math.abs(value);


		if (value == 0) {
			// if value is 0 we write 0;
			buffer.setUint8(0);

		} else {
			while (true) {
				pow *= byte;

				if (pow > absValue) {
					break;
				}

				size++;
			}

			header |= sign << 4
			header |= size;

			buffer.setUint8(header);
			buffer.setUintNByte(absValue, size);
		}

		return buffer.pointer - oldPointer;
	}

	public readOptimized(buffer: ArrayBufferBuilder): number {
		var oldPointer: number = buffer.pointer;

		var header: number = buffer.getUint8();

		if (header == 0) {
			this.high = 0;
			this.low = 0;
		} else {
			var sign: number = (header & 0b00010000) ? -1 : 1;
			var size: number = header & 0b00001111;

			//var bitsArray: BitsArray;

			if (size <= 4) {
				//bitsArray = new BitsArray(size, buffer);
				//this.low = bitsArray.get(size * 8);

				this.low = buffer.getUintNByte(size);
				this.high = 0;
			} else {
				this.low = buffer.getUint32();
				this.high = buffer.getUintNByte(size);

				//bitsArray = new BitsArray(size - 4, buffer);
				//this.high = bitsArray.get((size - 4) * 8);
			}
			
			if (sign == -1) {
				this.value *= -1;
			}
		}

		return buffer.pointer - oldPointer;
	}

	/**
	 * Returns the value of the 64 bit integer.
	 */
	public get value(): number {
		return this.high * MathUtil.INT_2_POW_32 + this.low;
	}

	/**
	 * Sets the value of the 64 bit integer.
	 * 
	 * @param {number} value - The value of the 64 bit integer.
	 */
	public set value(value: number) {
		var int32: number = MathUtil.INT_2_POW_32;

		this.high = Math.floor(value / int32);
		this.low = value % int32;
	}
}
