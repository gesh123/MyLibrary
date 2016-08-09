
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUpdateHintTextData } from "../data/SrvUpdateHintTextData";


export class SrvUpdateHintTextDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUpdateHintTextData): void {
		buffer.setUint8( data.hintId );
			buffer.setUint32( data.hintValue );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUpdateHintTextData): void {
		data.hintId = buffer.getUint8();
			data.hintValue = buffer.getUint32();
			
	}
}
