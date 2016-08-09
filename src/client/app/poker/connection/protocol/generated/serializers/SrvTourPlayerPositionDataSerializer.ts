
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourPlayerPositionData } from "../data/SrvTourPlayerPositionData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvTourPlayerPositionDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourPlayerPositionData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint16( data.position );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourPlayerPositionData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.position = buffer.getUint16();
			
	}
}
