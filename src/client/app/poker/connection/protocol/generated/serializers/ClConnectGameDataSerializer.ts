
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClConnectGameData } from "../data/ClConnectGameData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClConnectGameDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClConnectGameData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			buffer.setUint32( data.langID );
			buffer.setUint8( data.identificationType );
			
            if (data.identificationType != 0){
                buffer.setUTF16StringNullTerminated( data.password );
			
            }
			buffer.setUTF16StringNullTerminated( data.localIP );
			buffer.setUTF16StringNullTerminated( data.externalIP );
			buffer.setUint32( data.franchiseID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClConnectGameData): void {
		data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			data.langID = buffer.getUint32();
			data.identificationType = buffer.getUint8();
			
            if (data.identificationType != 0){
                data.password = buffer.getUTF16StringNullTerminated();
			
            }
			data.localIP = buffer.getUTF16StringNullTerminated();
			data.externalIP = buffer.getUTF16StringNullTerminated();
			data.franchiseID = buffer.getUint32();
			
	}
}
