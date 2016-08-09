
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerPrizePoolInfoData } from "../data/PokerPrizePoolInfoData";
import { PokerTournamentMoneyTypeData } from "../data/PokerTournamentMoneyTypeData";

import { PokerTournamentMoneyTypeDataSerializer } from "../serializers/PokerTournamentMoneyTypeDataSerializer";



export class PokerPrizePoolInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerPrizePoolInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			PokerTournamentMoneyTypeDataSerializer.serialize(buffer, data.amount);
			bitsReader.setBits( data.tourMoneyType, 3 );
			bitsReader.setBit( data.isRealMoney );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerPrizePoolInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.amount = new PokerTournamentMoneyTypeData(data); 
                        PokerTournamentMoneyTypeDataSerializer.deserialize(buffer, data.amount);
			data.tourMoneyType = bitsReader.getBits( 3 );
			data.isRealMoney = bitsReader.getBit() != 0;
			
	}
}
