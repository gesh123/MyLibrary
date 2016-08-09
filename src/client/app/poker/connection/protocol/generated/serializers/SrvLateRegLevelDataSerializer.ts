
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvLateRegLevelData } from "../data/SrvLateRegLevelData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvLateRegLevelDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvLateRegLevelData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.level );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvLateRegLevelData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.level = buffer.getUint8();
			
	}
}
