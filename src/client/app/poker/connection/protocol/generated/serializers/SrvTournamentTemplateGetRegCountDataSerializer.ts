
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTournamentTemplateGetRegCountData } from "../data/SrvTournamentTemplateGetRegCountData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvTournamentTemplateGetRegCountDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTournamentTemplateGetRegCountData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.pendingRegistrations );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTournamentTemplateGetRegCountData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.pendingRegistrations = buffer.getUint8();
			
	}
}
