
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourEndRemainingPlayersData } from "../data/SrvTourEndRemainingPlayersData";


export class SrvTourEndRemainingPlayersDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourEndRemainingPlayersData): void {
		buffer.setUint16( data.playersLeft );
			buffer.setUint16( data.playersTotal );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourEndRemainingPlayersData): void {
		data.playersLeft = buffer.getUint16();
			data.playersTotal = buffer.getUint16();
			
	}
}
