
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerPrizesSummaryInfoData } from "../data/PokerPrizesSummaryInfoData";
import { PokerTournamentMoneyTypeData } from "../data/PokerTournamentMoneyTypeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTournamentMoneyTypeDataSerializer } from "../serializers/PokerTournamentMoneyTypeDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class PokerPrizesSummaryInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerPrizesSummaryInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBits( data.sattelitesCount, 7 );
			bitsReader.setBit( data.hasGuaranteedPrizePool );
			
            for (let i = 0, l = data.sattelitesVect.length ; i < l; i++){
                let temp = data.sattelitesVect[i];
				BinaryNetworkIDSerializer.serialize(buffer, temp);
            }
			
            if (data.hasGuaranteedPrizePool == true){
                PokerTournamentMoneyTypeDataSerializer.serialize(buffer, data.guaranteedMoney);
			
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerPrizesSummaryInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.sattelitesCount = bitsReader.getBits( 7 );
			data.hasGuaranteedPrizePool = bitsReader.getBit() != 0;
			
            data.sattelitesVect = []; 
            for (let i = 0, l = data.sattelitesCount; i < l; i++){
                let temp = new BinaryNetworkID(data);
                BinaryNetworkIDSerializer.deserialize(buffer, temp);
                data.sattelitesVect.push( temp );
            }
			
            if (data.hasGuaranteedPrizePool == true){
                data.guaranteedMoney = new PokerTournamentMoneyTypeData(data); 
                        PokerTournamentMoneyTypeDataSerializer.deserialize(buffer, data.guaranteedMoney);
			
            }
			
	}
}
