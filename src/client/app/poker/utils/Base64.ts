﻿
export class Base64 {

    public static encode(buffer: ArrayBuffer): string {
        var binary = ''
        var bytes = new Uint8Array(buffer)
        var len = bytes.byteLength;

        for (var i = 0; i < len; i++)
            binary += String.fromCharCode(bytes[i]);

        return window.btoa(binary);
    }

    public static decode(base64: string): ArrayBuffer {
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array(len);

        for (var i = 0; i < len; i++)
            bytes[i] = binary_string.charCodeAt(i);

        return bytes.buffer;
    }

}
