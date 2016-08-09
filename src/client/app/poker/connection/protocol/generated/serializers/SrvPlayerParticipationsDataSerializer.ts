
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvPlayerParticipationsData } from "../data/SrvPlayerParticipationsData";
import { PokerGameInfoData } from "../data/PokerGameInfoData";
import { PokerMyRunningTournamentData } from "../data/PokerMyRunningTournamentData";
import { PokerPlayerTournamentInfoData } from "../data/PokerPlayerTournamentInfoData";
import { PokerRegisterJPTData } from "../data/PokerRegisterJPTData";

import { PokerGameInfoDataSerializer } from "../serializers/PokerGameInfoDataSerializer";
import { PokerMyRunningTournamentDataSerializer } from "../serializers/PokerMyRunningTournamentDataSerializer";
import { PokerPlayerTournamentInfoDataSerializer } from "../serializers/PokerPlayerTournamentInfoDataSerializer";
import { PokerRegisterJPTDataSerializer } from "../serializers/PokerRegisterJPTDataSerializer";



export class SrvPlayerParticipationsDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvPlayerParticipationsData): void {
		
            for (let i = 0, l = data.myGamesVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.myGamesVect[i];
				PokerGameInfoDataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.runningTournamentsVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.runningTournamentsVect[i];
				PokerMyRunningTournamentDataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.pendingTournamentsVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.pendingTournamentsVect[i];
				PokerPlayerTournamentInfoDataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.pendingTourTemplateInfosVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.pendingTourTemplateInfosVect[i];
				PokerRegisterJPTDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvPlayerParticipationsData): void {
		
            data.myGamesVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerGameInfoData(data);
                PokerGameInfoDataSerializer.deserialize(buffer, temp);
                data.myGamesVect.push( temp );
            }
			
            data.runningTournamentsVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerMyRunningTournamentData(data);
                PokerMyRunningTournamentDataSerializer.deserialize(buffer, temp);
                data.runningTournamentsVect.push( temp );
            }
			
            data.pendingTournamentsVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerPlayerTournamentInfoData(data);
                PokerPlayerTournamentInfoDataSerializer.deserialize(buffer, temp);
                data.pendingTournamentsVect.push( temp );
            }
			
            data.pendingTourTemplateInfosVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerRegisterJPTData(data);
                PokerRegisterJPTDataSerializer.deserialize(buffer, temp);
                data.pendingTourTemplateInfosVect.push( temp );
            }
			
	}
}
