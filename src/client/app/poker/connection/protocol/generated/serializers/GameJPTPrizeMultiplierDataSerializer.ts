
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { GameJPTPrizeMultiplierData } from "../data/GameJPTPrizeMultiplierData";
import { PokerTimeData } from "../data/PokerTimeData";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";



export class GameJPTPrizeMultiplierDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: GameJPTPrizeMultiplierData): void {
		buffer.setUint16( data.buyInMultiplier );
			PokerTimeDataSerializer.serialize(buffer, data.endTime);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: GameJPTPrizeMultiplierData): void {
		data.buyInMultiplier = buffer.getUint16();
			data.endTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.endTime);
			
	}
}
