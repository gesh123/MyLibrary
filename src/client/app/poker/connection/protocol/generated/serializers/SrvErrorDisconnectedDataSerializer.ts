
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvErrorDisconnectedData } from "../data/SrvErrorDisconnectedData";


export class SrvErrorDisconnectedDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvErrorDisconnectedData): void {
		buffer.setUint8( data.errorCode );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvErrorDisconnectedData): void {
		data.errorCode = buffer.getUint8();
			
	}
}
