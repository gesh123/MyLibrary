
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvPasswordErrorData } from "../data/SrvPasswordErrorData";


export class SrvPasswordErrorDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvPasswordErrorData): void {
		buffer.setUint8( data.reason );
			buffer.setUint8( data.shouldCloseTable ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvPasswordErrorData): void {
		data.reason = buffer.getUint8();
			data.shouldCloseTable = buffer.getUint8() != 0;
			
	}
}
