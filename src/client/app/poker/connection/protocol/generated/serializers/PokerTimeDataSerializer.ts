
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerTimeData } from "../data/PokerTimeData";


export class PokerTimeDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerTimeData): void {
		buffer.setUint8( data.highTimeStatus );
			buffer.setUint32( data.highPart );
			buffer.setUint32( data.lowPart );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerTimeData): void {
		data.highTimeStatus = buffer.getUint8();
			data.highPart = buffer.getUint32();
			data.lowPart = buffer.getUint32();
			
	}
}
