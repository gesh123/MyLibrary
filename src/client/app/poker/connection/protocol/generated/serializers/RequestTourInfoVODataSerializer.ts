
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { RequestTourInfoVOData } from "../data/RequestTourInfoVOData";


export class RequestTourInfoVODataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: RequestTourInfoVOData): void {
		buffer.setUint8( data.tabType );
			buffer.setUint32( data.version );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: RequestTourInfoVOData): void {
		data.tabType = buffer.getUint8();
			data.version = buffer.getUint32();
			
	}
}
