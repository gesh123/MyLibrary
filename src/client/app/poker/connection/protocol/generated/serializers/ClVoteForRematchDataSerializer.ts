
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClVoteForRematchData } from "../data/ClVoteForRematchData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClVoteForRematchDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClVoteForRematchData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.vote );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClVoteForRematchData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.vote = buffer.getUint8();
			
	}
}
