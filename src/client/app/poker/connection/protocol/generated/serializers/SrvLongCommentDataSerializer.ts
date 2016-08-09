
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvLongCommentData } from "../data/SrvLongCommentData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvLongCommentDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvLongCommentData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUTF16StringNullTerminated( data.longComment );
			buffer.setUint32( data.version );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvLongCommentData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.longComment = buffer.getUTF16StringNullTerminated();
			data.version = buffer.getUint32();
			
	}
}
