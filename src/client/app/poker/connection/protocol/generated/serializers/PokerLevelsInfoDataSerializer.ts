
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerLevelsInfoData } from "../data/PokerLevelsInfoData";


export class PokerLevelsInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerLevelsInfoData): void {
		buffer.setUint8( data.type );
			buffer.setUint8( data.duration );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerLevelsInfoData): void {
		data.type = buffer.getUint8();
			data.duration = buffer.getUint8();
			
	}
}
