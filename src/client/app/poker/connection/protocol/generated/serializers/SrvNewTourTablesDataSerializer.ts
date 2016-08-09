
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvNewTourTablesData } from "../data/SrvNewTourTablesData";
import { PokerTableInfoData } from "../data/PokerTableInfoData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTableInfoDataSerializer } from "../serializers/PokerTableInfoDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvNewTourTablesDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvNewTourTablesData): void {
		
            for (let i = 0, l = data.newPokerTableInfoVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.newPokerTableInfoVect[i];
				PokerTableInfoDataSerializer.serialize(buffer, temp);
            }
			buffer.setUint32( data.versionPokerTableInfo );
			BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvNewTourTablesData): void {
		
            data.newPokerTableInfoVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerTableInfoData(data);
                PokerTableInfoDataSerializer.deserialize(buffer, temp);
                data.newPokerTableInfoVect.push( temp );
            }
			data.versionPokerTableInfo = buffer.getUint32();
			data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			
	}
}
