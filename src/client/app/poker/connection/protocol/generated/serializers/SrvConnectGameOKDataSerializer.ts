
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvConnectGameOKData } from "../data/SrvConnectGameOKData";
import { PokerTimeData } from "../data/PokerTimeData";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";



export class SrvConnectGameOKDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvConnectGameOKData): void {
		PokerTimeDataSerializer.serialize(buffer, data.timeParts);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvConnectGameOKData): void {
		data.timeParts = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.timeParts);
			
	}
}
