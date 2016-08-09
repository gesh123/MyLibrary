
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvRakeRacePointsData } from "../data/SrvRakeRacePointsData";
import { GamePlayerTreasurePointsData } from "../data/GamePlayerTreasurePointsData";

import { GamePlayerTreasurePointsDataSerializer } from "../serializers/GamePlayerTreasurePointsDataSerializer";



export class SrvRakeRacePointsDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvRakeRacePointsData): void {
		
            for (let i = 0, l = data.pointsVect.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.pointsVect[i];
				GamePlayerTreasurePointsDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvRakeRacePointsData): void {
		
            data.pointsVect = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new GamePlayerTreasurePointsData(data);
                GamePlayerTreasurePointsDataSerializer.deserialize(buffer, temp);
                data.pointsVect.push( temp );
            }
			
	}
}
