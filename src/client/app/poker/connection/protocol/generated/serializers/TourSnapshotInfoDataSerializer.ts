
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { TourSnapshotInfoData } from "../data/TourSnapshotInfoData";
import { PokerTournamentData } from "../data/PokerTournamentData";

import { PokerTournamentDataSerializer } from "../serializers/PokerTournamentDataSerializer";



export class TourSnapshotInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: TourSnapshotInfoData): void {
		buffer.setUint8( data.tabType );
			
            for (let i = 0, l = data.toursInfoVOVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.toursInfoVOVect[i];
				PokerTournamentDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: TourSnapshotInfoData): void {
		data.tabType = buffer.getUint8();
			
            data.toursInfoVOVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerTournamentData(data);
                PokerTournamentDataSerializer.deserialize(buffer, temp);
                data.toursInfoVOVect.push( temp );
            }
			
	}
}
