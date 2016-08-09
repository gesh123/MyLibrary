
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvGameStartDelayedForRebuysData } from "../data/SrvGameStartDelayedForRebuysData";
import { PokerTimeData } from "../data/PokerTimeData";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";



export class SrvGameStartDelayedForRebuysDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvGameStartDelayedForRebuysData): void {
		PokerTimeDataSerializer.serialize(buffer, data.startTime);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvGameStartDelayedForRebuysData): void {
		data.startTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.startTime);
			
	}
}
