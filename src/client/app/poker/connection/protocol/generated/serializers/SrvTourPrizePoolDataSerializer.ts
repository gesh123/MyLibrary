
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourPrizePoolData } from "../data/SrvTourPrizePoolData";
import { PokerPrizePoolInfoData } from "../data/PokerPrizePoolInfoData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerPrizePoolInfoDataSerializer } from "../serializers/PokerPrizePoolInfoDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvTourPrizePoolDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourPrizePoolData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			PokerPrizePoolInfoDataSerializer.serialize(buffer, data.prizePoolVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourPrizePoolData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.prizePoolVO = new PokerPrizePoolInfoData(data); 
                        PokerPrizePoolInfoDataSerializer.deserialize(buffer, data.prizePoolVO);
			
	}
}
