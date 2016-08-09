
export class ArrayBufferUtil {
	public static concatinate(...rest: ArrayBuffer[]): ArrayBuffer {
		var l: number = rest.length;
		var i: number = 0;
        var size: number = 0;
        var result: ArrayBuffer;

		for (i = 0; i < l; i++) {
			size += rest[i].byteLength;
		}

        result = new ArrayBuffer(size);

        ArrayBufferUtil.set(result, 0, rest);

        return result;
	}

    public static set(target: ArrayBuffer, position: number, toSet: ArrayBuffer | ArrayBuffer[]): ArrayBuffer {
        var list: ArrayBuffer[];

        if (toSet instanceof Array) {
            list = toSet;
        } else if (toSet instanceof ArrayBuffer) {
            list = [toSet];
        }

        var dataView: Uint8Array = new Uint8Array(target);
        var ab: ArrayBuffer;
        var l: number = list.length;
        var i: number = 0;
        
        for (i = 0; i < l; i++) {
            ab = list[i];
            dataView.set(new Uint8Array(ab), position);
            position += ab.byteLength;
        }

		return target;
    }

	// TODO: this method should be reworked to be use only little endian. Now Uint16Array and Uint8Array have endianness as the system the code is run (most probably little but can also be bug);

    public static readUTFStrng(target: ArrayBuffer, position: number): { result: string; bytesRead: number; } {
		var dataView: DataView = new DataView(target, position);
		var result: string = "";
        var i: number = 0;
        var chatCode: number;

        if (dataView.byteLength == 0) {
			return { result: "", bytesRead: 0 };
		}

        while (true) {
            chatCode = dataView.getUint16(i * 2, true);

            if (chatCode == 0) break;

            result += String.fromCharCode(chatCode);
            i++;
        }

        return { result: result, bytesRead: i * 2 };
    }

    public static readANSIStrng(target: ArrayBuffer, position: number): { result: string; bytesRead: number; } {
		var dataView: DataView = new DataView(target, position);
		var result: string = "";
        var i: number = 0;
        var chatCode: number;

        if (dataView.byteLength == 0) {
			return { result: "", bytesRead: 0 };
		}

        while (true) {
            chatCode = dataView.getUint8(i);

            if (chatCode == 0) break;

            result += String.fromCharCode(chatCode);
            i++;
        }

        return { result: result, bytesRead: i };
    }
    
   /* protected static readStringHelper(dataView: Uint16Array | Uint8Array): string {
        var result: string = "";
        var i: number = 0;
        var chatCode: number;

        if (dataView.length == 0) return "";

        while (true) {
            chatCode = dataView[i];

            if (chatCode == 0) break;

            result += String.fromCharCode(dataView[0]);
            i++;
        }

        return result;
    }*/

    public static writeUTFStrng(target: ArrayBuffer, position: number, text: string): number {
		var dataView: DataView = new DataView(target, position);

		var l: number = text.length;
        var i: number;
		
        for (i = 0; i < l; i++) {
			dataView.setUint16(i * 2, text.charCodeAt(i), true);
        }

        dataView.setUint16(i * 2, 0, true);

		return i * 2;
    }

    public static writeANSIStrng(target: ArrayBuffer, position: number, text: string): number {
        var dataView: DataView = new DataView(target, position);

		var l: number = text.length;
        var i: number;

        for (i = 0; i < l; i++) {
			dataView.setUint8(i, text.charCodeAt(i));
        }

        dataView.setUint8(i, 0);

		return i;
    }
}
