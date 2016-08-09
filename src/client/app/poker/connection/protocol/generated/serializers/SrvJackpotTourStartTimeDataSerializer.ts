
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvJackpotTourStartTimeData } from "../data/SrvJackpotTourStartTimeData";
import { PokerTimeData } from "../data/PokerTimeData";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";



export class SrvJackpotTourStartTimeDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourStartTimeData): void {
		PokerTimeDataSerializer.serialize(buffer, data.tourStartTime);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourStartTimeData): void {
		data.tourStartTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.tourStartTime);
			
	}
}
