
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvFinishedOnPlaceData } from "../data/SrvFinishedOnPlaceData";


export class SrvFinishedOnPlaceDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvFinishedOnPlaceData): void {
		buffer.setUTF16StringNullTerminated( data.playerName );
			buffer.setUint32( data.franchiseID );
			buffer.setUint16( data.place );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvFinishedOnPlaceData): void {
		data.playerName = buffer.getUTF16StringNullTerminated();
			data.franchiseID = buffer.getUint32();
			data.place = buffer.getUint16();
			
	}
}
