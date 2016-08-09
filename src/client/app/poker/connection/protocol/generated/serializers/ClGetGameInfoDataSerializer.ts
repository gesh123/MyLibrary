
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClGetGameInfoData } from "../data/ClGetGameInfoData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClGetGameInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClGetGameInfoData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			buffer.setUint32( data.gameInfoVersion );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClGetGameInfoData): void {
		data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			data.gameInfoVersion = buffer.getUint32();
			
	}
}
