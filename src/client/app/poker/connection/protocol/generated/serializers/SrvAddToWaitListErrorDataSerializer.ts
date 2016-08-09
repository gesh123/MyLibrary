
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvAddToWaitListErrorData } from "../data/SrvAddToWaitListErrorData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvAddToWaitListErrorDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvAddToWaitListErrorData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvAddToWaitListErrorData): void {
		data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			
	}
}
