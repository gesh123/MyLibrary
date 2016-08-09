
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ReplayInfoData } from "../data/ReplayInfoData";
import { PokerTimeData } from "../data/PokerTimeData";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";



export class ReplayInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ReplayInfoData): void {
		buffer.setUint32( data.dealID );
			PokerTimeDataSerializer.serialize(buffer, data.startTime);
			PokerTimeDataSerializer.serialize(buffer, data.endTime);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ReplayInfoData): void {
		data.dealID = buffer.getUint32();
			data.startTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.startTime);
			data.endTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.endTime);
			
	}
}
