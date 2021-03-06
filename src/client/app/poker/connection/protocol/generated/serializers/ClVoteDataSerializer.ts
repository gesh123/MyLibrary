
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClVoteData } from "../data/ClVoteData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClVoteDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClVoteData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.vote );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClVoteData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.vote = buffer.getUint8();
			
	}
}
