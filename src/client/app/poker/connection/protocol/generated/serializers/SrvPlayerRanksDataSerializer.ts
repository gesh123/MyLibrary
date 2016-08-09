
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvPlayerRanksData } from "../data/SrvPlayerRanksData";
import { RankInfoData } from "../data/RankInfoData";

import { RankInfoDataSerializer } from "../serializers/RankInfoDataSerializer";



export class SrvPlayerRanksDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvPlayerRanksData): void {
		
            for (let i = 0, l = data.ranksVect.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.ranksVect[i];
				RankInfoDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvPlayerRanksData): void {
		
            data.ranksVect = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new RankInfoData(data);
                RankInfoDataSerializer.deserialize(buffer, temp);
                data.ranksVect.push( temp );
            }
			
	}
}
