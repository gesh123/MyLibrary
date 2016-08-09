
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTournamentRemovedData } from "../data/SrvTournamentRemovedData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvTournamentRemovedDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTournamentRemovedData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTournamentRemovedData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			
	}
}
