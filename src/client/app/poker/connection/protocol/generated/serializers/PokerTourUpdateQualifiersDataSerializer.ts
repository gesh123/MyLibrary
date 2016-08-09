
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerTourUpdateQualifiersData } from "../data/PokerTourUpdateQualifiersData";
import { PokerTournamentData } from "../data/PokerTournamentData";

import { PokerTournamentDataSerializer } from "../serializers/PokerTournamentDataSerializer";



export class PokerTourUpdateQualifiersDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerTourUpdateQualifiersData): void {
		buffer.setUint8( data.tabType );
			
            for (let i = 0, l = data.toursVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.toursVect[i];
				PokerTournamentDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerTourUpdateQualifiersData): void {
		data.tabType = buffer.getUint8();
			
            data.toursVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerTournamentData(data);
                PokerTournamentDataSerializer.deserialize(buffer, temp);
                data.toursVect.push( temp );
            }
			
	}
}
