
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ServerUpdateInfoData } from "../data/ServerUpdateInfoData";
import { PokerGameInfoData } from "../data/PokerGameInfoData";
import { PokerGameInfo1Data } from "../data/PokerGameInfo1Data";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerGameInfoDataSerializer } from "../serializers/PokerGameInfoDataSerializer";
import { PokerGameInfo1DataSerializer } from "../serializers/PokerGameInfo1DataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ServerUpdateInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ServerUpdateInfoData): void {
		
            for (let i = 0, l = data.newTablesVector.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.newTablesVector[i];
				PokerGameInfoDataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.changedTablesVector.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.changedTablesVector[i];
				PokerGameInfo1DataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.removedTablesVector.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.removedTablesVector[i];
				BinaryNetworkIDSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ServerUpdateInfoData): void {
		
            data.newTablesVector = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerGameInfoData(data);
                PokerGameInfoDataSerializer.deserialize(buffer, temp);
                data.newTablesVector.push( temp );
            }
			
            data.changedTablesVector = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerGameInfo1Data(data);
                PokerGameInfo1DataSerializer.deserialize(buffer, temp);
                data.changedTablesVector.push( temp );
            }
			
            data.removedTablesVector = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new BinaryNetworkID(data);
                BinaryNetworkIDSerializer.deserialize(buffer, temp);
                data.removedTablesVector.push( temp );
            }
			
	}
}
