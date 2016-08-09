
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvGameInfoData } from "../data/SrvGameInfoData";
import { PokerPlayerInfoData } from "../data/PokerPlayerInfoData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerPlayerInfoDataSerializer } from "../serializers/PokerPlayerInfoDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvGameInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvGameInfoData): void {
		
            for (let i = 0, l = data.playersList.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.playersList[i];
				PokerPlayerInfoDataSerializer.serialize(buffer, temp);
            }
			BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			buffer.setUint32( data.gameInfoVersion );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvGameInfoData): void {
		
            data.playersList = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new PokerPlayerInfoData(data);
                PokerPlayerInfoDataSerializer.deserialize(buffer, temp);
                data.playersList.push( temp );
            }
			data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			data.gameInfoVersion = buffer.getUint32();
			
	}
}
