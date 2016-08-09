
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClGetHandHistoryData } from "../data/ClGetHandHistoryData";


export class ClGetHandHistoryDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClGetHandHistoryData): void {
		buffer.setUint8( data.isGameNumber ? 1 : 0 );
			buffer.setUint32( data.data );
			buffer.setUint8( data.isTourReq ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClGetHandHistoryData): void {
		data.isGameNumber = buffer.getUint8() != 0;
			data.data = buffer.getUint32();
			data.isTourReq = buffer.getUint8() != 0;
			
	}
}
