
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourReenterResultData } from "../data/SrvTourReenterResultData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvTourReenterResultDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourReenterResultData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.errorCode );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourReenterResultData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.errorCode = buffer.getUint8();
			
	}
}
