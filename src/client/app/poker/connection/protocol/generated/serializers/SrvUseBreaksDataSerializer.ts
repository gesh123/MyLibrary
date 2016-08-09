
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUseBreaksData } from "../data/SrvUseBreaksData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvUseBreaksDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUseBreaksData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.useBreaks ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUseBreaksData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.useBreaks = buffer.getUint8() != 0;
			
	}
}
