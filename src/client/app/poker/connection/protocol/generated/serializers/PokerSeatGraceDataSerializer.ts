
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerSeatGraceData } from "../data/PokerSeatGraceData";
import { PokerTimeData } from "../data/PokerTimeData";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";



export class PokerSeatGraceDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerSeatGraceData): void {
		buffer.setUint8( data.seatID );
			PokerTimeDataSerializer.serialize(buffer, data.endTime);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerSeatGraceData): void {
		data.seatID = buffer.getUint8();
			data.endTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.endTime);
			
	}
}
