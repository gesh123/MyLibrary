
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourFinishedInfoData } from "../data/SrvTourFinishedInfoData";
import { PokerTourFinishedPlayerInfoData } from "../data/PokerTourFinishedPlayerInfoData";

import { PokerTourFinishedPlayerInfoDataSerializer } from "../serializers/PokerTourFinishedPlayerInfoDataSerializer";



export class SrvTourFinishedInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourFinishedInfoData): void {
		
            for (let i = 0, l = data.finishedPlayers.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.finishedPlayers[i];
				PokerTourFinishedPlayerInfoDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourFinishedInfoData): void {
		
            data.finishedPlayers = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new PokerTourFinishedPlayerInfoData(data);
                PokerTourFinishedPlayerInfoDataSerializer.deserialize(buffer, temp);
                data.finishedPlayers.push( temp );
            }
			
	}
}
