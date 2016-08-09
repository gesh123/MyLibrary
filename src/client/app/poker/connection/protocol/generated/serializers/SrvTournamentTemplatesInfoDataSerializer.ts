
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTournamentTemplatesInfoData } from "../data/SrvTournamentTemplatesInfoData";
import { PokerJPTData } from "../data/PokerJPTData";
import { PokerJPT1Data } from "../data/PokerJPT1Data";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerJPTDataSerializer } from "../serializers/PokerJPTDataSerializer";
import { PokerJPT1DataSerializer } from "../serializers/PokerJPT1DataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvTournamentTemplatesInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTournamentTemplatesInfoData): void {
		buffer.setUint32( data.version );
			
            for (let i = 0, l = data.addedVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.addedVect[i];
				PokerJPTDataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.changedVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.changedVect[i];
				PokerJPT1DataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.removedVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.removedVect[i];
				BinaryNetworkIDSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTournamentTemplatesInfoData): void {
		data.version = buffer.getUint32();
			
            data.addedVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerJPTData(data);
                PokerJPTDataSerializer.deserialize(buffer, temp);
                data.addedVect.push( temp );
            }
			
            data.changedVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerJPT1Data(data);
                PokerJPT1DataSerializer.deserialize(buffer, temp);
                data.changedVect.push( temp );
            }
			
            data.removedVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new BinaryNetworkID(data);
                BinaryNetworkIDSerializer.deserialize(buffer, temp);
                data.removedVect.push( temp );
            }
			
	}
}
