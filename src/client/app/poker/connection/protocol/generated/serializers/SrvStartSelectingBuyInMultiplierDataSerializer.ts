
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvStartSelectingBuyInMultiplierData } from "../data/SrvStartSelectingBuyInMultiplierData";
import { GameJPTPrizeMultiplierData } from "../data/GameJPTPrizeMultiplierData";

import { GameJPTPrizeMultiplierDataSerializer } from "../serializers/GameJPTPrizeMultiplierDataSerializer";



export class SrvStartSelectingBuyInMultiplierDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvStartSelectingBuyInMultiplierData): void {
		GameJPTPrizeMultiplierDataSerializer.serialize(buffer, data.jptPrizeMultiplierVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvStartSelectingBuyInMultiplierData): void {
		data.jptPrizeMultiplierVO = new GameJPTPrizeMultiplierData(data); 
                        GameJPTPrizeMultiplierDataSerializer.deserialize(buffer, data.jptPrizeMultiplierVO);
			
	}
}
