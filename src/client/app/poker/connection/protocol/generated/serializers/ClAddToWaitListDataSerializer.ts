
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClAddToWaitListData } from "../data/ClAddToWaitListData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClAddToWaitListDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClAddToWaitListData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClAddToWaitListData): void {
		data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			
	}
}
