
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerRegisterJPTData } from "../data/PokerRegisterJPTData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class PokerRegisterJPTDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerRegisterJPTData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.count );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerRegisterJPTData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.count = buffer.getUint8();
			
	}
}
