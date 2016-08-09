
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClRejectInviteData } from "../data/ClRejectInviteData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClRejectInviteDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClRejectInviteData): void {
		buffer.setUTF16StringNullTerminated( data.nickname );
			BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClRejectInviteData): void {
		data.nickname = buffer.getUTF16StringNullTerminated();
			data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			
	}
}
