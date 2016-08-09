
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvJackpotTourPrizeInfoData } from "../data/SrvJackpotTourPrizeInfoData";
import { PokerPrizeSchemeInfoRowData } from "../data/PokerPrizeSchemeInfoRowData";

import { PokerPrizeSchemeInfoRowDataSerializer } from "../serializers/PokerPrizeSchemeInfoRowDataSerializer";



export class SrvJackpotTourPrizeInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourPrizeInfoData): void {
		buffer.setUint8( data.inPercent ? 1 : 0 );
			
            for (let i = 0, l = data.prizeSchemeInfos.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.prizeSchemeInfos[i];
				PokerPrizeSchemeInfoRowDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourPrizeInfoData): void {
		data.inPercent = buffer.getUint8() != 0;
			
            data.prizeSchemeInfos = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerPrizeSchemeInfoRowData(data);
                PokerPrizeSchemeInfoRowDataSerializer.deserialize(buffer, temp);
                data.prizeSchemeInfos.push( temp );
            }
			
	}
}
