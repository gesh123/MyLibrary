import {MathUtil} from "./MathUtil";

export class ArrayBufferBuilder {

	protected dataView: DataView;
	protected bytesView: Uint8Array;

	/** Current postion at which values are written/read */
	public pointer: number;

	/** The endianness of the data written/read in the ArrayBufferBulider. If false or undefined, a big-endian values are written/read, otherwise a little-endian value are written/read. */
	public littleEndian: boolean;

	constructor(arrayBuffer: ArrayBuffer, littleEndian?: boolean)
	constructor(dataView: ArrayBufferView, littleEndian?: boolean)
	constructor(size: number, littleEndian?: boolean)
	constructor(data: number | ArrayBuffer | ArrayBufferView, littleEndian: boolean = false) {

		if (typeof data === "number") {
			this.init(new DataView(new ArrayBuffer(data)));


		} else if (data instanceof ArrayBuffer) {
			this.init(new DataView(data));

		} else {
			this.init(<ArrayBufferView>data);
		}
		
		this.littleEndian = littleEndian;
	}
	
	/**
	 * Initializes the dataView:DataView and bytesView:Uint8Array objects which are used by the other method to write and read data.
	 * @param {DataView | Uint8Array | ArrayBufferView} view the souce view object. If it is DataView or Uint8Array it will be used directly to initialize dataView or bytesView properties. If it is otherArrayBufferView its buffer, offset and length will be used to create DataView and Uint8Array.
	 */
	protected init(view: DataView | Uint8Array | ArrayBufferView): void {
		if (view instanceof DataView) {
			this.dataView = view;
			this.bytesView = new Uint8Array(view.buffer, view.byteOffset, view.byteLength);

		} else if (view instanceof Uint8Array) {
			this.dataView = new DataView(view.buffer, view.byteOffset, view.byteLength);
			this.bytesView = view;

		} else {
			this.dataView = new DataView(view.buffer, view.byteOffset, view.byteLength);
			this.bytesView = new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
		}

		this.pointer = 0;
	}
	
	/**
	 * Extends the arrayBuffer of this ArrayBufferBulider instance with the specified additionalLength. If no additionalLength is specified the arrayBuffer size is doubled.
	 * @param {number} additionalLength? the additiona length in bytes to be added to the arrayBuffer.
	 */
	public extendArrayBuffer(additionalLength?: number): void {
		var oldView: DataView = this.dataView;
		var oldPointer: number = this.pointer;
		var newLength: number = this.dataView.byteLength + (additionalLength || this.dataView.byteLength);

		this.init(new DataView(new ArrayBuffer(newLength)));

		this.setArrayBuffer(oldView.buffer, oldView.byteOffset, oldPointer);
	}

	/**
	 * Returns a slice of the arrayBufer. By default from the start (posiotn 0) to the current pointer position.
	 */
    public getBufferSlice(begin?: number, end?: number): ArrayBuffer {
        begin = begin || this.dataView.byteOffset;
        end = end || (this.dataView.byteOffset + this.pointer);

        return this.dataView.buffer.slice(begin, end);

		//return this.dataView.buffer.slice(this.dataView.byteOffset, this.dataView.byteOffset + this.pointer);
	}


	/**
	 * This method can be used to ensure that the ArrayBufferBuilder has <size> bytes of free space.
	 * It checks <this.pointer + size > this.size> and extends the ArrayBufferBuilder if true.
	 * @param {number} size the required number of free bytes.
	 */
	public ensureHasFreeSpace(size: number): void {
		if (this.pointer + size > this.dataView.byteLength) {
			this.extendArrayBuffer(Math.max(size, this.dataView.byteLength));
		}
	}

	/**
	 * The size in bytes of the arrayBuffer.
	 * This porpery can be set to a value lower than the current size but this may lead to loss of data and changing pointer position (if size < this.pointer)
	 */
	public get size(): number {
		return this.dataView.byteLength;
	}
	public set size(value: number) {
		if (value != this.dataView.byteLength) {
			if (!value || value <= 0) {
				throw new Error("size cannot be " + value);
			} else if (value < this.pointer) {
				this.pointer = value;
			}

			this.extendArrayBuffer(value - this.dataView.byteLength);
		}
	}

	/**
	 * Returns an the current DataView.
	 * Be careful when using it - it may not have enough bytes to write/read your data or ArrayBufferBuilder may change its buffer due to changing size.
	 */
	public get view(): DataView {
		return this.dataView;
	}

	/**
	 * Writes the contents of an ArrayBuffer at the current pointer position.
	 * @param {ArrayBuffer} arrayBuffer the ArrayBuffer to be written.
	 * @param byteOffset
	 * @param length
	 */
	public setArrayBuffer(arrayBuffer: ArrayBuffer, byteOffset?: number, length?: number): void {
		var newBytesView: Uint8Array = new Uint8Array(arrayBuffer, byteOffset, length);
		var valueLength: number = newBytesView.byteLength;

		if (this.pointer + valueLength > this.dataView.byteLength) {
			this.extendArrayBuffer(Math.max(valueLength, this.dataView.byteLength));
		}

        this.bytesView.set(newBytesView, this.pointer);

		this.pointer += valueLength;
	}

	/**
	 * Writes the contents of an ArrayBufferView(DataView, Int8Array, etc...) at the current pointer position.
	 * @param {ArrayBuffer} arrayBuffer the ArrayBufferView to be written.
	 */
	public setDataView(arrayBuffer: ArrayBufferView): void {
		//var arrayBuffer: ArrayBuffer = dataView.buffer.slice(dataView.byteOffset, dataView.byteOffset + dataView.byteLength);

		this.setArrayBuffer(arrayBuffer.buffer, arrayBuffer.byteOffset, arrayBuffer.byteLength);
	}
	
	/**
	 * Gets an ArrayBuffer starting at the current pointer position with specified length.
	 * @param {number} length the length of ArrayBuffer to be returned/read
	 */
	public getArrayBuffer(length: number): ArrayBuffer {
		var result: ArrayBuffer = this.dataView.buffer.slice(this.dataView.byteOffset + this.pointer, this.dataView.byteOffset + this.pointer + length);

		this.pointer += length;

		return result;
	}

	/**
	 * Reads an UTF16 encoded string starting at the current pointer position with the specified length(in chars).
	 * As this is UTF16 string each char is 2 bytes so a totatal of <length> * 2 bytes will be read.
	 * @param {number} length the length (in chars) of string to be returned/read. 
	 */
	public getUTF16String(length: number): string {
		var step: number = 2;
		var result: string = "";
        var i: number = 0;
		var l: number;
        var chatCode: number;

		length = length * step;
		l = this.pointer + length;

        for (i = this.pointer; i < l; i += step) {
            chatCode = this.dataView.getUint16(i, this.littleEndian);

            result += String.fromCharCode(chatCode);
        }

		this.pointer += length;

        return result;
    }

	/**
	 * Reads an ANSI encoded string starting at the current pointer position with the specified length(in chars).
	 * As this is ANSI string each char is 1 byte so a totatal of <length> bytes will be read.
	 * @param {number} length the length (in chars) of string to be returned/read. 
	 */
	public getANSIString(length: number): string {
		var step: number = 1;
		var result: string = "";
        var i: number = 0;
		var l: number;
        var chatCode: number;

		length = length * step;
		l = this.pointer + length;

        for (i = this.pointer; i < l; i += step) {
            chatCode = this.dataView.getUint8(i);

            result += String.fromCharCode(chatCode);
        }

		this.pointer += length;

        return result;
    }

	/**
	 * Reads an UTF16 encoded, null-terminated string starting at the current pointer position. As this is UTF16 string each char is 2 bytes. 
	 * This method will read chars till e null/0 char is read and will stop there. The pointer will be set at the null char position + 2;
	 */
	public getUTF16StringNullTerminated(): string {
		var step: number = 2;
		var result: string = "";
        var i: number = 0;
        var chatCode: number;

        for (i = this.pointer; true; i += step) {
            chatCode = this.dataView.getUint16(i, this.littleEndian);

			if (chatCode == 0) break;

            result += String.fromCharCode(chatCode);
        }

		this.pointer = i + step;

        return result;
    }

	/**
	 * Reads an ANSI encoded, null-terminated string starting at the current pointer position. As this is ANSI string each char is 1 byte. 
	 * This method will read chars till e null/0 char is read and will stop there. The pointer will be set at the null char position + 1;
	 */
	public getANSIStringNullTerminated(): string {
		var step: number = 1;
		var result: string = "";
        var i: number = 0;
        var chatCode: number;

        for (i = this.pointer; true; i += step) {
            chatCode = this.dataView.getUint8(i);

			if (chatCode == 0) break;

            result += String.fromCharCode(chatCode);
        }

		this.pointer = i + step;

        return result;
    }

	/**
	 * Reads an UTF16 encoded, size-prefixed string starting at the current pointer position.
	 * Based on the <prefixSize> parameter 1, 2 or 4 bytes will be read as Uint8, Uint16, ot Uint32 respectively. 
	 * This uint represents the length(in chars) of the string to be read. 
	 * As this is UTF16 string each char is 2 bytes so a totatal of <length> * 2 bytes will be read.
	 * @param {number = 2} prefixSize the size(in bytes) of the length prefiex. Can be 1, 2 or 4. If other value is passed an erro will be thrown. Default is 2.
	 */
	public getUTF16StringPrefixed(prefixSize: number = 2): string {
		var length: number;

		switch (prefixSize) {
			case 1:
				length = this.dataView.getUint8(this.pointer);
				break;

			case 2:
				length = this.dataView.getUint16(this.pointer, this.littleEndian);
				break;

			case 4:
				length = this.dataView.getUint32(this.pointer, this.littleEndian);
				break;

			default:
				throw new Error("Invalied prefix size: " + prefixSize);
		}

		var step: number = 2;
		var result: string = "";
        var i: number = 0;
		var l: number;
        var chatCode: number;

		length *= step;
		l = this.pointer + prefixSize + length;

        for (i = this.pointer + prefixSize; i < l; i += step) {
            chatCode = this.dataView.getUint16(i, this.littleEndian);

            result += String.fromCharCode(chatCode);
        }

		this.pointer += prefixSize + length;

        return result;
	}

	/**
	 * Reads an ANSI encoded, size-prefixed string starting at the current pointer position.
	 * Based on the <prefixSize> parameter 1, 2 or 4 bytes will be read as Uint8, Uint16, ot Uint32 respectively. 
	 * This uint represents the length(in chars) of the string to be read. 
	 * As this is ANSI string each char is 1 byte so a totatal of length bytes will be read.
	 * @param {number = 2} prefixSize the size(in bytes) of the length prefiex. Can be 1, 2 or 4. If other value is passed an erro will be thrown. Default is 2.
	 */
	public getANSIStringPrefixed(prefixSize: number = 2): string {
		var length: number;

		switch (prefixSize) {
			case 1:
				length = this.dataView.getUint8(this.pointer);
				break;

			case 2:
				length = this.dataView.getUint16(this.pointer, this.littleEndian);
				break;

			case 4:
				length = this.dataView.getUint32(this.pointer, this.littleEndian);
				break;

			default:
				throw new Error("Invalied prefix size: " + prefixSize);
		}

		var step: number = 1;
		var result: string = "";
        var i: number = 0;
		var l: number;
        var chatCode: number;

		length *= step;
		l = this.pointer + prefixSize + length;

        for (i = this.pointer + prefixSize; i < l; i += step) {
            chatCode = this.dataView.getUint8(i);

            result += String.fromCharCode(chatCode);
        }

		this.pointer += prefixSize + length;

        return result;
    }
	
	/**
	 * Writes UTF16 encoded string starting at the current pointer position.
	 * No prefixes, postfixes(null-terminators, etc) or other data is added. Just a sequence of chars.
	 * As this is UTF16 string each char is 2 bytes, so the total length of the written data will be <text.length> * 2;
	 * @param {string} text The string to be written.
	 */
	public setUTF16String(text: string): void {
		var step: number = 2;
		var l: number = text.length;
		var i: number;
		var p: number = this.pointer;
		var charCode: number;
		var valueLength: number = l * step;

		if (this.pointer + valueLength > this.dataView.byteLength) {
			this.extendArrayBuffer(Math.max(valueLength, this.dataView.byteLength));
		}

        for (i = 0; i < l; i++) {
			charCode = text.charCodeAt(i);

            this.dataView.setUint16(p, charCode, this.littleEndian);

			p += step;
        }

		this.pointer = p;
	}

	/**
	 * Writes ANSI encoded string starting at the current pointer position.
	 * No prefixes, postfixes(null-terminators, etc) or other data is added. Just a sequence of chars.
	 * As this is ANSI string each char is 1 byte, so the total length of the written data will be <text.length> ;
	 * @param {string} text The string to be written.
	 */
	public setANSIString(text:string): void {
		var step: number = 1;
		var l: number = text.length;
		var i: number;
		var p: number = this.pointer;
		var charCode: number;
		var valueLength: number = l * step;

		if (this.pointer + valueLength > this.dataView.byteLength) {
			this.extendArrayBuffer(Math.max(valueLength, this.dataView.byteLength));
		}

        for (i = 0; i < l; i++) {
			charCode = text.charCodeAt(i);

            this.dataView.setUint8(p, charCode);

			p += step;
        }

		this.pointer = p;
	}

	/**
	 * Writes UTF16 encoded string starting at the current pointer position.
	 * The sting will be terminated with null/0 postfix.
	 * As this is UTF16 string each char is 2 bytes, so the total length of the written data will be <text.length> * 2 + 2;
	 * @param {string} text The string to be written.
	 */
	public setUTF16StringNullTerminated(text: string): void {
		this.setUTF16String(text);
		this.setUint16(0);
	}

	/**
	 * Writes ANSI encoded string starting at the current pointer position.
	 * The sting will be terminated with null/0 postfix.
	 * As this is ANSI string each char is 1 bytes, so the total length of the written data will be <text.length> + 1;
	 * @param {string} text The string to be written.
	 */
	public setANSIStringNullTerminated(text: string): void {
		this.setANSIString(text);
		this.setUint8(0);
	}

	/**
	 * Writes UTF16 encoded string starting at the current pointer position.
	 * Based on the <prefixSize> parameter 1, 2 or 4 bytes will be written at the beginning as Uint8, Uint16, ot Uint32. 
	 * This uint represents the length(in bytes) of the string. 
	 * As this is UTF16 string each char is 2 bytes, so the total length of the written data will be <text.length>*2 + <prefixSize>;
	 * @param {string} text The string to be written.
	 * @param {number = 2} prefixSize The size(in bytes) of the length prefiex. Can be 1, 2 or 4. If other value is passed an error will be thrown. Default is 2.
	 */
	public setUTF16StringPrefixed(text: string, prefixSize: number = 2): void {
		var l: number = text.length * 2;

		switch (prefixSize) {
			case 1:
				this.setUint8(l);
				break;

			case 2:
				this.setUint16(l);
				break;

			case 4:
				this.setUint32(l);
				break;

			default:
				throw new Error("Invalied prefix size: " + prefixSize);
		}

		this.setUTF16String(text);
	}

	/**
	 * Writes ANSI encoded string starting at the current pointer position.
	 * Based on the <prefixSize> parameter 1, 2 or 4 bytes will be written at the beginning as Uint8, Uint16, ot Uint32. 
	 * This uint represents the length(in bytes) of the string. 
	 * As this is ANSI string each char is 1 bytes, so the total length of the written data will be <text.length> + <prefixSize>;
	 * @param {string} text The string to be written.
	 * @param {number = 2} prefixSize The size(in bytes) of the length prefiex. Can be 1, 2 or 4. If other value is passed an error will be thrown. Default is 2.
	 */
	public setANSIStringPrefixed(text: string, prefixSize: number = 2): void {
		var l: number = text.length;

		switch (prefixSize) {
			case 1:
				this.setUint8(l);
				break;

			case 2:
				this.setUint16(l);
				break;

			case 4:
				this.setUint32(l);
				break;

			default:
				throw new Error("Invalied prefix size: " + prefixSize);
		}

		this.setANSIString(text);
	}

	// Info about UTF-8 encoding - https://en.wikipedia.org/wiki/UTF-8
	
	/**
	 * Reads an UTF8 encoded chat at the current pointer position. As UTF8 chars have variable length(1, 2 or 3 bytes, depending on the charcode)
	 * the size of the data read cannot be claculated beforehand. The pointer will be incremented with the size of the char read.
	 */
	public getUTF8Char(): string {
		var leadingByte: number = this.getUint8();
		var charCode: number;

		if ((leadingByte & UTF8Bites.HEADER_MASK_ONE_BYTE_CHAR) == UTF8Bites.HEADER_ONE_BYTE_CHAR) {

			charCode = leadingByte & UTF8Bites.BODY_MASK_ONE_BYTE_CHAR;
			return String.fromCharCode(charCode);

		} else if ((leadingByte & UTF8Bites.HEADER_MASK_TWO_BYTE_CHAR) == UTF8Bites.HEADER_TWO_BYTE_CHAR) {

			charCode = ((leadingByte & UTF8Bites.BODY_MASK_TWO_BYTE_CHAR) << 6) | (this.getUint8() & UTF8Bites.BODY_MASK_SEQUENCE);
			return String.fromCharCode(charCode);

		} else if ((leadingByte & UTF8Bites.HEADER_MASK_THREE_BYTE_CHAR) == UTF8Bites.HEADER_THREE_BYTE_CHAR) {

			charCode = ((leadingByte & UTF8Bites.BODY_MASK_THREE_BYTE_CHAR) << 12) | ((this.getUint8() & UTF8Bites.BODY_MASK_SEQUENCE) << 6) | (this.getUint8() & UTF8Bites.BODY_MASK_SEQUENCE);
			return String.fromCharCode(charCode);
		}

		return this.getUTF8Char();
	}

	/**
	 * Writes UTF8 encoded char, whith <charCode>, at the current pointer position. As UTF8 chars have variable length(1, 2 or 3 bytes, depending on the charcode)
	 * the size of the data written cannot be claculated beforehand. The pointer will be incremented with the size of the char written.
	 * @param {number} charCode the charcode of the char to be wriiten.
	 */
	public setUTF8CharCode(charCode: number): void {
		if (charCode < 0x80) {					// char is stored in 1 byte
			this.setUint8(charCode);

		} else if (charCode < 0x800) {			// char is stored in 2 bytes
			this.setUint8(charCode >> 6);
			this.setUint8(charCode & UTF8Bites.BODY_MASK_SEQUENCE);

		} else if (charCode < 0x10000) {		// char is stored in 3 bytes
			this.setUint8(charCode >> 12);
			this.setUint8((charCode >> 6) & UTF8Bites.BODY_MASK_SEQUENCE);
			this.setUint8(charCode & UTF8Bites.BODY_MASK_SEQUENCE);

		} else {
			//there should not be any chars in the unicode table that are sotred in 4 bytes or more
		}
	}

	/**
	 * Writes UTF8 encoded char at the current pointer position. As UTF8 chars have variable length(1, 2 or 3 bytes, depending on the charcode)
	 * the size of the data written cannot be claculated beforehand. The pointer will be incremented with the size of the char written.
	 * @param {number} charCode the charcode of the char to be wriiten.
	 */
	public setUTF8Char(char: string): void {
		var charCode: number = char.charCodeAt(0);

		this.setUTF8CharCode(charCode);
	}

	/**
	 * Reads an UTF8 encoded string starting at the current pointer position with the specified length(in bytes).
	 * As UTF8 chars have variable length(1, 2 or 3 bytes, depending on the charcode) the number of chars read cannot be claculated beforehand.
	 * @param {number} length the length (in bytes) of string to be returned/read. 
	 */
	public getUTF8String(length: number): string {
		var result: string = "";

		while (length > 0) {
			result += this.getUTF8Char();
			length--;
		}

		return result;
	}

	/**
	 * Writes UTF8 encoded string starting at the current pointer position. No prefixes, postfixes(null-terminators, etc) or other data is added. Just a sequence of chars.
	 * As UTF8 chars have variable length(1, 2 or 3 bytes, depending on the charcode) the size of the data written cannot be claculated beforehand.
	 * The pointer will be incremented with the size of the string written.
	 * @param {string} text The string to be written.
	 */
	public setUTF8String(text: string): void {
		var length: number = text.length;

		for (var i = 0; i < length; i++) {
			this.setUTF8CharCode(text.charCodeAt(i));
			length--;
		}
	}

	/**
	 * Reads an UTF8 encoded, null-terminated string starting at the current pointer position. This method will read chars till e null/0 char is read and will stop there.
	 * As UTF8 chars have variable length(1, 2 or 3 bytes, depending on the charcode). The pointer will be incremented with the size of the string read + 1(for the null/0 terminator).
	 */
	public getUTF8StringNullTerminated(): string {
		var result: string = "";
		var terminator: string = String.fromCharCode(0);
		var char: string;
		
		while (true) {
			char = this.getUTF8Char();

			if (char == terminator) break;

			result += char;
		}

		return result;
	}
	
	/**
	 * Writes UTF8 encoded string starting at the current pointer position. The sting will be terminated with null/0 postfix.
	 * As UTF8 chars have variable length(1, 2 or 3 bytes, depending on the charcode) the size of the data written cannot be claculated beforehand.
	 * The pointer will be incremented with the size of the string written.
	 * @param {string} text The string to be written.
	 */
	public setUTF8StringNullTerminated(text: string): void {
		this.setUTF8String(text);
		this.setUTF8CharCode(0);
	}

	/**
	 * Reads an UTF8 encoded, size-prefixed string starting at the current pointer position. 
	 * Based on the <prefixSize> parameter 1, 2 or 4 bytes will be read as Uint8, Uint16, ot Uint32 respectively. 
	 * This uint represents the length(in bytes) of the string to be read. 
	 * As UTF8 chars have variable length(1, 2 or 3 bytes, depending on the charcode) the size of the data read cannot be claculated beforehand.
	 * The pointer will be incremented with the size of the string read + <prefixSize>.
	 * @param {number = 2} prefixSize the size(in bytes) of the length prefiex. Can be 1, 2 or 4. If other value is passed an erro will be thrown. Default is 2.
	 */
	public getUTF8StringPrefixed(prefixSize: number): string {
		var stringEnd: number;
		var result: string = "";

		switch (prefixSize) {
			case 1:
				stringEnd = this.getUint8() + this.pointer;
				break;

			case 2:
				stringEnd = this.getUint16() + this.pointer;
				break;

			case 4:
				stringEnd = this.getUint32() + this.pointer;
				break;

			default:
				throw new Error("Invalied prefix size: " + prefixSize);
		}

		while (this.pointer < stringEnd) {
			result += this.getUTF8Char();
		}

		return result;
	}

	/**
	 * Writes UTF8 encoded string starting at the current pointer position.
	 * Based on the <prefixSize> parameter 1, 2 or 4 bytes will be written at the beginning as Uint8, Uint16, ot Uint32. 
	 * This uint represents the length(in bytes) of the string. 
	 * As UTF8 chars have variable length(1, 2 or 3 bytes, depending on the charcode) the size of the data written cannot be claculated beforehand.
	 * The pointer will be incremented with the size of the string written + <prefixSize>.
	 * @param {string} text The string to be written.
	 * @param {number = 2} prefixSize The size(in bytes) of the length prefiex. Can be 1, 2 or 4. If other value is passed an error will be thrown. Default is 2.
	 */
	public setUTF8StringPrefixed(text: string, prefixSize: number = 2): void {

		if (prefixSize != 1 && prefixSize != 2 && prefixSize != 4) {
			throw new Error("Invalied prefix size: " + prefixSize);
		}

		var prefixPointer: number = this.pointer;

		this.pointer += prefixSize;

		this.setUTF8String(text);

		var size: number = this.pointer - (prefixPointer + prefixSize);

		switch (prefixSize) {
			case 1:
				this.dataView.setUint8(prefixPointer, size);
				break;

			case 2:
				this.dataView.setUint16(prefixPointer, size, this.littleEndian);
				break;

			case 4:
				this.dataView.setUint32(prefixPointer, size, this.littleEndian);
				break;
		}
	}


	// set get 64bit ints and uints ... not exactly
	// All numbers in Javascript are 64 bit "double" precision IEE754 floating point.
	// The largest positive whole number that can therefore be accurately represented is 2^ 53. The remaining bits are reserved for the exponent.

	/**
	 * Gets the Int64 value at the current pointer position.
	 * All numbers in Javascript are 64 bit "double" precision IEE754 floating point. The largest positive whole number that can therefore be accurately represented is 2^ 53. The remaining bits are reserved for the exponent.
	 */
	public getInt64(): number {
		var high: number = this.littleEndian ? this.dataView.getInt32(this.pointer, this.littleEndian) : this.dataView.getUint32(this.pointer, this.littleEndian);
		var low: number = this.littleEndian ? this.dataView.getUint32(this.pointer + 4, this.littleEndian) : this.dataView.getInt32(this.pointer + 4, this.littleEndian);
		var result: number = high * MathUtil.INT_2_POW_32 + low;
		
		this.pointer += 8;

		return result;
	}
	
	/**
	 * Gets the Uint64 value at the current pointer position.
	 * All numbers in Javascript are 64 bit "double" precision IEE754 floating point. The largest positive whole number that can therefore be accurately represented is 2^ 53. The remaining bits are reserved for the exponent.
	 */
	public getUint64(): number {
		var high: number = this.littleEndian ? this.dataView.getUint32(this.pointer, this.littleEndian) : this.dataView.getUint32(this.pointer, this.littleEndian);
		var low: number = this.littleEndian ? this.dataView.getUint32(this.pointer + 4, this.littleEndian) : this.dataView.getUint32(this.pointer + 4, this.littleEndian);
		var result: number = high * MathUtil.INT_2_POW_32 + low;

		this.pointer += 8;

		return result;
	}

	/**
	  * Stores an Uint64 value at the current pointer position.
	  * @param value The value to set.
	  */
	public setUint64(value: number): void {
		var valueLength: number = 8;

		if (this.pointer + valueLength > this.dataView.byteLength) {
			this.extendArrayBuffer(Math.max(valueLength, this.dataView.byteLength));
		}
		
        var high: number = Math.floor(value / MathUtil.INT_2_POW_32);
		var low: number = value % MathUtil.INT_2_POW_32;

		if (this.littleEndian) {
			this.dataView.setUint32(this.pointer, high, this.littleEndian);
			this.dataView.setUint32(this.pointer + 4, low, this.littleEndian)
		} else {
			this.dataView.setUint32(this.pointer, low, this.littleEndian);
			this.dataView.setUint32(this.pointer + 4, high, this.littleEndian)
		}

		this.pointer += valueLength;
	}
	/**
	  * Stores an Int64 value at the current pointer position.
	  * @param value The value to set.
	  */
	public setInt64(value: number): void {
		var valueLength: number = 8;

		if (this.pointer + valueLength > this.dataView.byteLength) {
			this.extendArrayBuffer(Math.max(valueLength, this.dataView.byteLength));
		}

        var high: number = Math.floor(value / MathUtil.INT_2_POW_32);
		var low: number = value % MathUtil.INT_2_POW_32;

		if (this.littleEndian) {
			this.dataView.setInt32(this.pointer, high, this.littleEndian);
			this.dataView.setUint32(this.pointer + 4, low, this.littleEndian)
		} else {
			this.dataView.setUint32(this.pointer, low, this.littleEndian);
			this.dataView.setInt32(this.pointer + 4, high, this.littleEndian)
		}

		this.pointer += valueLength;
	}

	/**
	 * Reads N byte uint form the buffer
	 * 
	 * @param {number} n Number of bytes of the uint - 1,2,3,4. Bitwise operations do not work over 4 bytes/32 bit integers
	 */
	public getUintNByte(n: number): number {
		// TODO: add little/big endian support;

		var result: number = 0;
		var byte: number;

		for (var i = 0; i < n; i++) {
			byte = this.getUint8();

			if (byte) {
				result |= (byte << (i * 8));
			}
		}

		return result;
	}

	/**
	 * Writes n byte uint into the buffer.
	 * 
	 * @param {number} value the number to be written.
	 * @param {number} n? Number of bytes of the uint - 1,2,3,4. Bitwise operations do not work over 4 bytes/32 bit integers

	 */
	public setUintNByte(value: number, n?: number): void {
		// TODO: add little/big endian support;
		
		var mask: number = 0xFF;

		if (!n) {
			var byte: number = 0xFF;	// 255
			var pow: number = 1;

			n = 1;
			value = Math.abs(value);

			while (true) {
				pow *= byte;

				if (pow > value) {
					break;
				}

				n++;
			}
		}

		for (var i = 0; i < n; i++) {
			this.setUint8((value >> (i * 8)) & mask);
		}
	}


	// | ------------------------------------------------- |
	// | Methods available on the starndard DataView class |
	// V ------------------------------------------------- V

	 /**
	  * Gets the Float32 value at the current pointer position.
	  */
	public getFloat32(): number {
		var result: number = this.dataView.getFloat32(this.pointer, this.littleEndian);

		this.pointer += 4;

		return result;
	}

	/**
	 * Gets the Float64 value at the current pointer position.
	 */
	public getFloat64(): number {
		var result: number = this.dataView.getFloat64(this.pointer, this.littleEndian);

		this.pointer += 8;

		return result;
	}

	/**
	 * Gets the Int8 value at the current pointer position.
	 */
	public getInt8(): number {
		var result: number = this.dataView.getInt8(this.pointer);

		this.pointer += 1;

		return result;
	}

	/**
	 * Gets the Int16 value at the current pointer position.
	 */
	public getInt16(): number {
		var result: number = this.dataView.getInt16(this.pointer, this.littleEndian);

		this.pointer += 2;

		return result;
	}

	/**
	 * Gets the Int32 value at the current pointer position.
	 */
	public getInt32(): number {
		var result: number = this.dataView.getInt32(this.pointer, this.littleEndian);

		this.pointer += 4;

		return result;
	}
	
	/**
	 * Gets the Uint8 value at the current pointer position.
	 */
	public getUint8(): number {
		var result: number = this.dataView.getUint8(this.pointer);

		this.pointer += 1;

		return result;
	}
	
	/**
	 * Gets the Uint16 value at the current pointer position.
	 */
	public getUint16(): number {
		var result: number = this.dataView.getUint16(this.pointer, this.littleEndian);

		this.pointer += 2;

		return result;
	}
	
	/**
	 * Gets the Uint32 value at the current pointer position.
	 */
	public getUint32(): number {
		var result: number = this.dataView.getUint32(this.pointer, this.littleEndian);

		this.pointer += 4;

		return result;
	}
	
	/**
	  * Stores an Float32 value at the current pointer position.
	  * @param value The value to set.
	  */
	public setFloat32(value: number): void {
		var valueLength: number = 4;

		if (this.pointer + valueLength > this.dataView.byteLength) {
			this.extendArrayBuffer(Math.max(valueLength, this.dataView.byteLength));
		}

        this.dataView.setFloat32(this.pointer, value, this.littleEndian);

		this.pointer += valueLength;
	}

	/**
	  * Stores an Float64 value at the current pointer position.
	  * @param value The value to set.
	  */
	public setFloat64(value: number): void {
		var valueLength: number = 8;

		if (this.pointer + valueLength > this.dataView.byteLength) {
			this.extendArrayBuffer(Math.max(valueLength, this.dataView.byteLength));
		}

        this.dataView.setFloat64(this.pointer, value, this.littleEndian);

		this.pointer += valueLength;
	}
	
	/**
	  * Stores an Int8 value at the current pointer position.
	  * @param value The value to set.
	  */
	public setInt8(value: number): void {
		var valueLength: number = 1;

		if (this.pointer + valueLength > this.dataView.byteLength) {
			this.extendArrayBuffer(Math.max(valueLength, this.dataView.byteLength));
		}

        this.dataView.setInt8(this.pointer, value);

		this.pointer += valueLength;
	}
	
	/**
	  * Stores an Int16 value at the current pointer position.
	  * @param value The value to set.
	  */
	public setInt16(value: number): void {
		var valueLength: number = 2;

		if (this.pointer + valueLength > this.dataView.byteLength) {
			this.extendArrayBuffer(Math.max(valueLength, this.dataView.byteLength));
		}

        this.dataView.setInt16(this.pointer, value, this.littleEndian);

		this.pointer += valueLength;
	}
	
	/**
	  * Stores an Int32 value at the current pointer position.
	  * @param value The value to set.
	  */
	public setInt32(value: number): void {
		var valueLength: number = 4;

		if (this.pointer + valueLength > this.dataView.byteLength) {
			this.extendArrayBuffer(Math.max(valueLength, this.dataView.byteLength));
		}

        this.dataView.setInt32(this.pointer, value, this.littleEndian);

		this.pointer += valueLength;
	}
	
	/**
	  * Stores an Uint8 value at the current pointer position.
	  * @param value The value to set.
	  */
	public setUint8(value: number): void {
		var valueLength: number = 1;

		if (this.pointer + valueLength > this.dataView.byteLength) {
			this.extendArrayBuffer(Math.max(valueLength, this.dataView.byteLength));
		}

        this.dataView.setUint8(this.pointer, value);

		this.pointer += valueLength;
	}
	
	/**
	  * Stores an Uint16 value at the current pointer position.
	  * @param value The value to set.
	  */
	public setUint16(value: number): void {
		var valueLength: number = 2;

		if (this.pointer + valueLength > this.dataView.byteLength) {
			this.extendArrayBuffer(Math.max(valueLength, this.dataView.byteLength));
		}

        this.dataView.setUint16(this.pointer, value, this.littleEndian);

		this.pointer += valueLength;
	}
	
	/**
	  * Stores an Uint32 value at the current pointer position.
	  * @param value The value to set.
	  */
	public setUint32(value: number): void {
		var valueLength: number = 4;

		if (this.pointer + valueLength > this.dataView.byteLength) {
			this.extendArrayBuffer(Math.max(valueLength, this.dataView.byteLength));
		}

        this.dataView.setUint32(this.pointer, value, this.littleEndian);

		this.pointer += valueLength;
	}
}

const enum UTF8Bites {
	HEADER_MASK_ONE_BYTE_CHAR = 0b10000000,			// 10000000 = 128
	HEADER_MASK_TWO_BYTE_CHAR = 0b11100000,			// 11100000 = 244
	HEADER_MASK_THREE_BYTE_CHAR = 0b11110000,		// 11110000 = 240
	HEADER_MASK_SEQUENCE = 0b11000000,				// 11000000 = 192

	HEADER_ONE_BYTE_CHAR = 0b00000000,				// 00000000 = 0
	HEADER_TWO_BYTE_CHAR = 0b11000000,				// 11000000 = 192
	HEADER_THREE_BYTE_CHAR = 0b11100000,			// 11100000 = 224
	HEADER_SEQUENCE = 0b10000000,					// 10000000 = 128

	BODY_MASK_ONE_BYTE_CHAR = 0b01111111,			// 01111111 = 127
	BODY_MASK_TWO_BYTE_CHAR = 0b00011111,			// 00011111 = 31
	BODY_MASK_THREE_BYTE_CHAR = 0b00001111,			// 00001111 = 15
	BODY_MASK_SEQUENCE = 0b00111111					// 00111111 = 63
}
