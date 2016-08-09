
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUpdateTourReentrantsCountData } from "../data/SrvUpdateTourReentrantsCountData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvUpdateTourReentrantsCountDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUpdateTourReentrantsCountData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint16( data.count );
			buffer.setUint32( data.version );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUpdateTourReentrantsCountData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.count = buffer.getUint16();
			data.version = buffer.getUint32();
			
	}
}
