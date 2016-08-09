
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvStartJackpotTourPrizeNegoData } from "../data/SrvStartJackpotTourPrizeNegoData";
import { PokerTimeData } from "../data/PokerTimeData";
import { PokerPrizeSchemeInfoRowData } from "../data/PokerPrizeSchemeInfoRowData";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";
import { PokerPrizeSchemeInfoRowDataSerializer } from "../serializers/PokerPrizeSchemeInfoRowDataSerializer";



export class SrvStartJackpotTourPrizeNegoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvStartJackpotTourPrizeNegoData): void {
		PokerTimeDataSerializer.serialize(buffer, data.endTime);
			buffer.setUint8( data.inPercent ? 1 : 0 );
			
            for (let i = 0, l = data.prizeSchemeInfos.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.prizeSchemeInfos[i];
				PokerPrizeSchemeInfoRowDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvStartJackpotTourPrizeNegoData): void {
		data.endTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.endTime);
			data.inPercent = buffer.getUint8() != 0;
			
            data.prizeSchemeInfos = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerPrizeSchemeInfoRowData(data);
                PokerPrizeSchemeInfoRowDataSerializer.deserialize(buffer, temp);
                data.prizeSchemeInfos.push( temp );
            }
			
	}
}
