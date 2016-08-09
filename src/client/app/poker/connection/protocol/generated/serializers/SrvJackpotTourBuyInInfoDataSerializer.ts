
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvJackpotTourBuyInInfoData } from "../data/SrvJackpotTourBuyInInfoData";
import { PokerTournamentMoneyTypeData } from "../data/PokerTournamentMoneyTypeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTournamentMoneyTypeDataSerializer } from "../serializers/PokerTournamentMoneyTypeDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvJackpotTourBuyInInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourBuyInInfoData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			PokerTournamentMoneyTypeDataSerializer.serialize(buffer, data.buyInInfoVO);
			PokerTournamentMoneyTypeDataSerializer.serialize(buffer, data.moneyInAccountVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourBuyInInfoData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.buyInInfoVO = new PokerTournamentMoneyTypeData(data); 
                        PokerTournamentMoneyTypeDataSerializer.deserialize(buffer, data.buyInInfoVO);
			data.moneyInAccountVO = new PokerTournamentMoneyTypeData(data); 
                        PokerTournamentMoneyTypeDataSerializer.deserialize(buffer, data.moneyInAccountVO);
			
	}
}
