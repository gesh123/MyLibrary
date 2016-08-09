
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvWaitListData } from "../data/SrvWaitListData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvWaitListDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvWaitListData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			buffer.setUTF16StringNullTerminated( data.reserveID );
			buffer.setUint8( data.serverID );
			buffer.setUint8( data.networkID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvWaitListData): void {
		data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			data.reserveID = buffer.getUTF16StringNullTerminated();
			data.serverID = buffer.getUint8();
			data.networkID = buffer.getUint8();
			
	}
}
