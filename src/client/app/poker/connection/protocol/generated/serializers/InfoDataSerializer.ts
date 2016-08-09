
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { InfoData } from "../data/InfoData";


export class InfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: InfoData): void {
		buffer.setUint8( data.inServer );
			buffer.setUint8( data.outOfServer );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: InfoData): void {
		data.inServer = buffer.getUint8();
			data.outOfServer = buffer.getUint8();
			
	}
}
