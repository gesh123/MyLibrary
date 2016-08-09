
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourStartInfoData } from "../data/SrvTourStartInfoData";


export class SrvTourStartInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourStartInfoData): void {
		buffer.setInt32( data.players );
			buffer.setUint16( data.seconds );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourStartInfoData): void {
		data.players = buffer.getInt32();
			data.seconds = buffer.getUint16();
			
	}
}
