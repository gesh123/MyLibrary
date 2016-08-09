
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUpdateTablesData } from "../data/SrvUpdateTablesData";
import { PokerTableInfo1Data } from "../data/PokerTableInfo1Data";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTableInfo1DataSerializer } from "../serializers/PokerTableInfo1DataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvUpdateTablesDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUpdateTablesData): void {
		
            for (let i = 0, l = data.updatePokerTableInfoVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.updatePokerTableInfoVect[i];
				PokerTableInfo1DataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.removedPokerTableInfoVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.removedPokerTableInfoVect[i];
				BinaryNetworkIDSerializer.serialize(buffer, temp);
            }
			buffer.setUint32( data.versionPokerTableInfoVect );
			BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUpdateTablesData): void {
		
            data.updatePokerTableInfoVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerTableInfo1Data(data);
                PokerTableInfo1DataSerializer.deserialize(buffer, temp);
                data.updatePokerTableInfoVect.push( temp );
            }
			
            data.removedPokerTableInfoVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new BinaryNetworkID(data);
                BinaryNetworkIDSerializer.deserialize(buffer, temp);
                data.removedPokerTableInfoVect.push( temp );
            }
			data.versionPokerTableInfoVect = buffer.getUint32();
			data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			
	}
}
