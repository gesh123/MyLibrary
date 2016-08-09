
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClSubscribeForTournamentTemplatesInfoData } from "../data/ClSubscribeForTournamentTemplatesInfoData";


export class ClSubscribeForTournamentTemplatesInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClSubscribeForTournamentTemplatesInfoData): void {
		buffer.setUint32( data.version );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClSubscribeForTournamentTemplatesInfoData): void {
		data.version = buffer.getUint32();
			
	}
}
