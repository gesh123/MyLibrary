
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUpdatePlayersData } from "../data/SrvUpdatePlayersData";
import { PokerTournamentPlayerInfoData } from "../data/PokerTournamentPlayerInfoData";
import { PokerTournamentPlayerInfo1Data } from "../data/PokerTournamentPlayerInfo1Data";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTournamentPlayerInfoDataSerializer } from "../serializers/PokerTournamentPlayerInfoDataSerializer";
import { PokerTournamentPlayerInfo1DataSerializer } from "../serializers/PokerTournamentPlayerInfo1DataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvUpdatePlayersDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUpdatePlayersData): void {
		
            for (let i = 0, l = data.addedPlayerInfoVector.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.addedPlayerInfoVector[i];
				PokerTournamentPlayerInfoDataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.changedPlayerInfoVector.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.changedPlayerInfoVector[i];
				PokerTournamentPlayerInfo1DataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.removedPlayersVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.removedPlayersVect[i];
				buffer.setUint16( temp );
            }
			buffer.setUint32( data.playerInfoVersion );
			BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUpdatePlayersData): void {
		
            data.addedPlayerInfoVector = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerTournamentPlayerInfoData(data);
                PokerTournamentPlayerInfoDataSerializer.deserialize(buffer, temp);
                data.addedPlayerInfoVector.push( temp );
            }
			
            data.changedPlayerInfoVector = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerTournamentPlayerInfo1Data(data);
                PokerTournamentPlayerInfo1DataSerializer.deserialize(buffer, temp);
                data.changedPlayerInfoVector.push( temp );
            }
			
            data.removedPlayersVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = buffer.getUint16();
                data.removedPlayersVect.push( temp );
            }
			data.playerInfoVersion = buffer.getUint32();
			data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			
	}
}
