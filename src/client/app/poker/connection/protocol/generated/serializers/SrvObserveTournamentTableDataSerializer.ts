
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvObserveTournamentTableData } from "../data/SrvObserveTournamentTableData";
import { Info1Data } from "../data/Info1Data";

import { Info1DataSerializer } from "../serializers/Info1DataSerializer";



export class SrvObserveTournamentTableDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvObserveTournamentTableData): void {
		Info1DataSerializer.serialize(buffer, data.info);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvObserveTournamentTableData): void {
		data.info = new Info1Data(data); 
                        Info1DataSerializer.deserialize(buffer, data.info);
			
	}
}
