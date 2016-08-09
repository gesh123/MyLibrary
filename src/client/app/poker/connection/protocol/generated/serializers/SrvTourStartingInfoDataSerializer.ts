
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourStartingInfoData } from "../data/SrvTourStartingInfoData";
import { PokerPlayerTournamentInfoData } from "../data/PokerPlayerTournamentInfoData";

import { PokerPlayerTournamentInfoDataSerializer } from "../serializers/PokerPlayerTournamentInfoDataSerializer";



export class SrvTourStartingInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourStartingInfoData): void {
		
            for (let i = 0, l = data.tourStartingInfoVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.tourStartingInfoVect[i];
				PokerPlayerTournamentInfoDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourStartingInfoData): void {
		
            data.tourStartingInfoVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerPlayerTournamentInfoData(data);
                PokerPlayerTournamentInfoDataSerializer.deserialize(buffer, temp);
                data.tourStartingInfoVect.push( temp );
            }
			
	}
}
