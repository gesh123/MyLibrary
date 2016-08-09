
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourMoneyData } from "../data/SrvTourMoneyData";
import { PokerTourMoneyData } from "../data/PokerTourMoneyData";

import { PokerTourMoneyDataSerializer } from "../serializers/PokerTourMoneyDataSerializer";



export class SrvTourMoneyDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourMoneyData): void {
		PokerTourMoneyDataSerializer.serialize(buffer, data.tourMoneyVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourMoneyData): void {
		data.tourMoneyVO = new PokerTourMoneyData(data); 
                        PokerTourMoneyDataSerializer.deserialize(buffer, data.tourMoneyVO);
			
	}
}
