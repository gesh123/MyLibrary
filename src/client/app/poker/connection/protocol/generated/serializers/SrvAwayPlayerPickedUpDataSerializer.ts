
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvAwayPlayerPickedUpData } from "../data/SrvAwayPlayerPickedUpData";


export class SrvAwayPlayerPickedUpDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvAwayPlayerPickedUpData): void {
		buffer.setUTF16StringNullTerminated( data.playerName );
			buffer.setUint32( data.franchiseID );
			buffer.setUint8( data.minutesAway );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvAwayPlayerPickedUpData): void {
		data.playerName = buffer.getUTF16StringNullTerminated();
			data.franchiseID = buffer.getUint32();
			data.minutesAway = buffer.getUint8();
			
	}
}
