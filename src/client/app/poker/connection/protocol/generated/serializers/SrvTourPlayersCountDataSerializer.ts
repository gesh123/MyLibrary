
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourPlayersCountData } from "../data/SrvTourPlayersCountData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvTourPlayersCountDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourPlayersCountData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint16( data.playersCount );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourPlayersCountData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.playersCount = buffer.getUint16();
			
	}
}
