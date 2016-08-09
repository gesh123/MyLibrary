
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourPlayerSitOutData } from "../data/SrvTourPlayerSitOutData";


export class SrvTourPlayerSitOutDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourPlayerSitOutData): void {
		buffer.setUint8( data.seatID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourPlayerSitOutData): void {
		data.seatID = buffer.getUint8();
			
	}
}
