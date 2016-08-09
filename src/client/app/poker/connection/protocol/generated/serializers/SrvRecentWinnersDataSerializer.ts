
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvRecentWinnersData } from "../data/SrvRecentWinnersData";
import { PokerJPTWinnersData } from "../data/PokerJPTWinnersData";

import { PokerJPTWinnersDataSerializer } from "../serializers/PokerJPTWinnersDataSerializer";



export class SrvRecentWinnersDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvRecentWinnersData): void {
		PokerJPTWinnersDataSerializer.serialize(buffer, data.winnersVO);
			
            for (let i = 0, l = data.removedWinnersVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.removedWinnersVect[i];
				buffer.setUint32( temp );
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvRecentWinnersData): void {
		data.winnersVO = new PokerJPTWinnersData(data); 
                        PokerJPTWinnersDataSerializer.deserialize(buffer, data.winnersVO);
			
            data.removedWinnersVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = buffer.getUint32();
                data.removedWinnersVect.push( temp );
            }
			
	}
}
