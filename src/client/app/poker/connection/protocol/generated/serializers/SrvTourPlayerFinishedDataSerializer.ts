
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourPlayerFinishedData } from "../data/SrvTourPlayerFinishedData";
import { GameTournamentPlayerFinishData } from "../data/GameTournamentPlayerFinishData";

import { GameTournamentPlayerFinishDataSerializer } from "../serializers/GameTournamentPlayerFinishDataSerializer";



export class SrvTourPlayerFinishedDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourPlayerFinishedData): void {
		GameTournamentPlayerFinishDataSerializer.serialize(buffer, data.finishVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourPlayerFinishedData): void {
		data.finishVO = new GameTournamentPlayerFinishData(data); 
                        GameTournamentPlayerFinishDataSerializer.deserialize(buffer, data.finishVO);
			
	}
}
