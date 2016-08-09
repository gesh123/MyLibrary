
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvGameStartData } from "../data/SrvGameStartData";
import { PlayerInfoData } from "../data/PlayerInfoData";

import { PlayerInfoDataSerializer } from "../serializers/PlayerInfoDataSerializer";



export class SrvGameStartDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvGameStartData): void {
		buffer.setUint8( data.gameState );
			
            for (let i = 0, l = data.participatingPlayers.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.participatingPlayers[i];
				PlayerInfoDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvGameStartData): void {
		data.gameState = buffer.getUint8();
			
            data.participatingPlayers = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new PlayerInfoData(data);
                PlayerInfoDataSerializer.deserialize(buffer, temp);
                data.participatingPlayers.push( temp );
            }
			
	}
}
