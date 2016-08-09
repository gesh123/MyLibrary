
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvGameWaitersInfoData } from "../data/SrvGameWaitersInfoData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvGameWaitersInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvGameWaitersInfoData): void {
		
            for (let i = 0, l = data.waitersVector.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.waitersVector[i];
				buffer.setUTF16StringNullTerminated( temp );
            }
			BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			buffer.setUint32( data.versionInfo );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvGameWaitersInfoData): void {
		
            data.waitersVector = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = buffer.getUTF16StringNullTerminated();
                data.waitersVector.push( temp );
            }
			data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			data.versionInfo = buffer.getUint32();
			
	}
}
