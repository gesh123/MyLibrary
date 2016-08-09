
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvPlayersOnTableData } from "../data/SrvPlayersOnTableData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvPlayersOnTableDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvPlayersOnTableData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			
            for (let i = 0, l = data.playerLocalIDs.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.playerLocalIDs[i];
				buffer.setUint16( temp );
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvPlayersOnTableData): void {
		data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			
            data.playerLocalIDs = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = buffer.getUint16();
                data.playerLocalIDs.push( temp );
            }
			
	}
}
