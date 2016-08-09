
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClGetServerInfoData } from "../data/ClGetServerInfoData";
import { LobbySubscribeGameData } from "../data/LobbySubscribeGameData";
import { UnsubscribeGameTypeData } from "../data/UnsubscribeGameTypeData";

import { LobbySubscribeGameDataSerializer } from "../serializers/LobbySubscribeGameDataSerializer";
import { UnsubscribeGameTypeDataSerializer } from "../serializers/UnsubscribeGameTypeDataSerializer";



export class ClGetServerInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClGetServerInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBits( data.subscribeVectorLength, 4 );
			bitsReader.setBits( data.unsubscribeVectorLength, 4 );
			
            for (let i = 0, l = data.subscribeVector.length ; i < l; i++){
                let temp = data.subscribeVector[i];
				LobbySubscribeGameDataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.unsubscribeVector.length ; i < l; i++){
                let temp = data.unsubscribeVector[i];
				UnsubscribeGameTypeDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClGetServerInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.subscribeVectorLength = bitsReader.getBits( 4 );
			data.unsubscribeVectorLength = bitsReader.getBits( 4 );
			
            data.subscribeVector = []; 
            for (let i = 0, l = data.subscribeVectorLength; i < l; i++){
                let temp = new LobbySubscribeGameData(data);
                LobbySubscribeGameDataSerializer.deserialize(buffer, temp);
                data.subscribeVector.push( temp );
            }
			
            data.unsubscribeVector = []; 
            for (let i = 0, l = data.unsubscribeVectorLength; i < l; i++){
                let temp = new UnsubscribeGameTypeData(data);
                UnsubscribeGameTypeDataSerializer.deserialize(buffer, temp);
                data.unsubscribeVector.push( temp );
            }
			
	}
}
