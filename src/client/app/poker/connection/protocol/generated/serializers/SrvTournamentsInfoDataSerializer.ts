
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTournamentsInfoData } from "../data/SrvTournamentsInfoData";
import { PokerTournamentData } from "../data/PokerTournamentData";
import { ShortTourInfoData } from "../data/ShortTourInfoData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTournamentDataSerializer } from "../serializers/PokerTournamentDataSerializer";
import { ShortTourInfoDataSerializer } from "../serializers/ShortTourInfoDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvTournamentsInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTournamentsInfoData): void {
		buffer.setUint32( data.version );
			
            for (let i = 0, l = data.newToursVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.newToursVect[i];
				PokerTournamentDataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.changedToursVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.changedToursVect[i];
				ShortTourInfoDataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.removedToursVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.removedToursVect[i];
				BinaryNetworkIDSerializer.serialize(buffer, temp);
            }
			buffer.setUint8( data.tourTabsType );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTournamentsInfoData): void {
		data.version = buffer.getUint32();
			
            data.newToursVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerTournamentData(data);
                PokerTournamentDataSerializer.deserialize(buffer, temp);
                data.newToursVect.push( temp );
            }
			
            data.changedToursVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new ShortTourInfoData(data);
                ShortTourInfoDataSerializer.deserialize(buffer, temp);
                data.changedToursVect.push( temp );
            }
			
            data.removedToursVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new BinaryNetworkID(data);
                BinaryNetworkIDSerializer.deserialize(buffer, temp);
                data.removedToursVect.push( temp );
            }
			data.tourTabsType = buffer.getUint8();
			
	}
}
