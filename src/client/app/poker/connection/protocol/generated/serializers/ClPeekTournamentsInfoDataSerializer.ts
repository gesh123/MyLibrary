
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClPeekTournamentsInfoData } from "../data/ClPeekTournamentsInfoData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClPeekTournamentsInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClPeekTournamentsInfoData): void {
		
            for (let i = 0, l = data.tourIDsVect.length , t = buffer.setUint32( l ); i < l; i++){
                let temp = data.tourIDsVect[i];
				BinaryNetworkIDSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClPeekTournamentsInfoData): void {
		
            data.tourIDsVect = []; 
            for (let i = 0, l = buffer.getUint32(); i < l; i++){
                let temp = new BinaryNetworkID(data);
                BinaryNetworkIDSerializer.deserialize(buffer, temp);
                data.tourIDsVect.push( temp );
            }
			
	}
}
