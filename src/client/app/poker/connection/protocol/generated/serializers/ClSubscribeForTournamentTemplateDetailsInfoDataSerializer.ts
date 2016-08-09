
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClSubscribeForTournamentTemplateDetailsInfoData } from "../data/ClSubscribeForTournamentTemplateDetailsInfoData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClSubscribeForTournamentTemplateDetailsInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClSubscribeForTournamentTemplateDetailsInfoData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint32( data.version );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClSubscribeForTournamentTemplateDetailsInfoData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.version = buffer.getUint32();
			
	}
}
