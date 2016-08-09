
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerServerLocationData } from "../data/PokerServerLocationData";


export class PokerServerLocationDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerServerLocationData): void {
		buffer.setUint8( data.ID );
			buffer.setANSIStringNullTerminated( data.location );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerServerLocationData): void {
		data.ID = buffer.getUint8();
			data.location = buffer.getANSIStringNullTerminated();
			
	}
}
