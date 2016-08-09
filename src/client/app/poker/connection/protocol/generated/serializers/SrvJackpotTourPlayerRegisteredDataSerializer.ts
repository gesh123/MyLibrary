
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvJackpotTourPlayerRegisteredData } from "../data/SrvJackpotTourPlayerRegisteredData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvJackpotTourPlayerRegisteredDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourPlayerRegisteredData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourPlayerRegisteredData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			
	}
}
