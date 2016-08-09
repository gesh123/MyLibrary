
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvRemoveFromWaitListOkData } from "../data/SrvRemoveFromWaitListOkData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvRemoveFromWaitListOkDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvRemoveFromWaitListOkData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvRemoveFromWaitListOkData): void {
		data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			
	}
}
