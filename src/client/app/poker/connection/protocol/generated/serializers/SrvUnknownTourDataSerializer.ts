
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUnknownTourData } from "../data/SrvUnknownTourData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvUnknownTourDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUnknownTourData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUnknownTourData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			
	}
}
