
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClObserveTournamentTemplateTableData } from "../data/ClObserveTournamentTemplateTableData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClObserveTournamentTemplateTableDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClObserveTournamentTemplateTableData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClObserveTournamentTemplateTableData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			
	}
}
