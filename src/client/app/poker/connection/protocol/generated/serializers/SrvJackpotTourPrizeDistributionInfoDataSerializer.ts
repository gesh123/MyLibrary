
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvJackpotTourPrizeDistributionInfoData } from "../data/SrvJackpotTourPrizeDistributionInfoData";
import { PokerPrizeSchemeInfoRowData } from "../data/PokerPrizeSchemeInfoRowData";

import { PokerPrizeSchemeInfoRowDataSerializer } from "../serializers/PokerPrizeSchemeInfoRowDataSerializer";



export class SrvJackpotTourPrizeDistributionInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourPrizeDistributionInfoData): void {
		buffer.setUint16( data.buyInMultiplier );
			buffer.setUint8( data.inPercent ? 1 : 0 );
			
            for (let i = 0, l = data.prizeSchemeInfos.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.prizeSchemeInfos[i];
				PokerPrizeSchemeInfoRowDataSerializer.serialize(buffer, temp);
            }
			buffer.setUint8( data.dealStatus ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourPrizeDistributionInfoData): void {
		data.buyInMultiplier = buffer.getUint16();
			data.inPercent = buffer.getUint8() != 0;
			
            data.prizeSchemeInfos = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerPrizeSchemeInfoRowData(data);
                PokerPrizeSchemeInfoRowDataSerializer.deserialize(buffer, temp);
                data.prizeSchemeInfos.push( temp );
            }
			data.dealStatus = buffer.getUint8() != 0;
			
	}
}
