
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClUnsubscribeForTournamentTemplateDetailsInfoData } from "../data/ClUnsubscribeForTournamentTemplateDetailsInfoData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClUnsubscribeForTournamentTemplateDetailsInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClUnsubscribeForTournamentTemplateDetailsInfoData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClUnsubscribeForTournamentTemplateDetailsInfoData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			
	}
}
