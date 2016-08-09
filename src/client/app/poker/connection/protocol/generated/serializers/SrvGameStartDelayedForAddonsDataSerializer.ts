
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvGameStartDelayedForAddonsData } from "../data/SrvGameStartDelayedForAddonsData";
import { PokerTimeData } from "../data/PokerTimeData";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";



export class SrvGameStartDelayedForAddonsDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvGameStartDelayedForAddonsData): void {
		PokerTimeDataSerializer.serialize(buffer, data.startTime);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvGameStartDelayedForAddonsData): void {
		data.startTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.startTime);
			
	}
}
