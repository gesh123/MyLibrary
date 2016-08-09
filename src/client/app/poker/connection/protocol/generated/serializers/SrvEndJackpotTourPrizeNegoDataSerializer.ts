
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvEndJackpotTourPrizeNegoData } from "../data/SrvEndJackpotTourPrizeNegoData";
import { PokerTimeData } from "../data/PokerTimeData";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";



export class SrvEndJackpotTourPrizeNegoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvEndJackpotTourPrizeNegoData): void {
		PokerTimeDataSerializer.serialize(buffer, data.tourStartTime);
			buffer.setUint8( data.dealAccepted ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvEndJackpotTourPrizeNegoData): void {
		data.tourStartTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.tourStartTime);
			data.dealAccepted = buffer.getUint8() != 0;
			
	}
}
