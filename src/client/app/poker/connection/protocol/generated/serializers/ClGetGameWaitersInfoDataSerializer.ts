
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClGetGameWaitersInfoData } from "../data/ClGetGameWaitersInfoData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClGetGameWaitersInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClGetGameWaitersInfoData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			buffer.setUint32( data.infoVersion );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClGetGameWaitersInfoData): void {
		data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			data.infoVersion = buffer.getUint32();
			
	}
}
