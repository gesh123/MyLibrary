
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClAcceptInviteData } from "../data/ClAcceptInviteData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class ClAcceptInviteDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClAcceptInviteData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			OptimizedBinaryNumberSerializer.serialize( buffer, data.buyInMoney );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClAcceptInviteData): void {
		data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			data.buyInMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
