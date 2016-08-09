
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerBreaksInfoData } from "../data/PokerBreaksInfoData";


export class PokerBreaksInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerBreaksInfoData): void {
		buffer.setUint8( data.periodBreaksInfo );
			buffer.setUint8( data.durationBreaksInfo );
			buffer.setUint8( data.startBreaksInfo );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerBreaksInfoData): void {
		data.periodBreaksInfo = buffer.getUint8();
			data.durationBreaksInfo = buffer.getUint8();
			data.startBreaksInfo = buffer.getUint8();
			
	}
}
