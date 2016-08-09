
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUpdateMinPlayersToStartData } from "../data/SrvUpdateMinPlayersToStartData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvUpdateMinPlayersToStartDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUpdateMinPlayersToStartData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint16( data.minPlayers );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUpdateMinPlayersToStartData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.minPlayers = buffer.getUint16();
			
	}
}
