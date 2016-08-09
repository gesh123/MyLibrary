
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourEndRemainingPlayersUpdateData } from "../data/SrvTourEndRemainingPlayersUpdateData";


export class SrvTourEndRemainingPlayersUpdateDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourEndRemainingPlayersUpdateData): void {
		buffer.setUint32( data.playersLeft );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourEndRemainingPlayersUpdateData): void {
		data.playersLeft = buffer.getUint32();
			
	}
}
