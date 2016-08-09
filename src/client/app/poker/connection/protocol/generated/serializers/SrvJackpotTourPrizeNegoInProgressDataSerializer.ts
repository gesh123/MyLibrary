
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvJackpotTourPrizeNegoInProgressData } from "../data/SrvJackpotTourPrizeNegoInProgressData";
import { PokerPrizeSchemeInfoRowData } from "../data/PokerPrizeSchemeInfoRowData";
import { PokerTimeData } from "../data/PokerTimeData";

import { PokerPrizeSchemeInfoRowDataSerializer } from "../serializers/PokerPrizeSchemeInfoRowDataSerializer";
import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";



export class SrvJackpotTourPrizeNegoInProgressDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourPrizeNegoInProgressData): void {
		buffer.setUint8( data.canVote ? 1 : 0 );
			buffer.setUint8( data.votedPlayersCount );
			buffer.setUint8( data.inPercent ? 1 : 0 );
			
            for (let i = 0, l = data.prizeSchemeInfos.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.prizeSchemeInfos[i];
				PokerPrizeSchemeInfoRowDataSerializer.serialize(buffer, temp);
            }
			PokerTimeDataSerializer.serialize(buffer, data.endTime);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourPrizeNegoInProgressData): void {
		data.canVote = buffer.getUint8() != 0;
			data.votedPlayersCount = buffer.getUint8();
			data.inPercent = buffer.getUint8() != 0;
			
            data.prizeSchemeInfos = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerPrizeSchemeInfoRowData(data);
                PokerPrizeSchemeInfoRowDataSerializer.deserialize(buffer, temp);
                data.prizeSchemeInfos.push( temp );
            }
			data.endTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.endTime);
			
	}
}
