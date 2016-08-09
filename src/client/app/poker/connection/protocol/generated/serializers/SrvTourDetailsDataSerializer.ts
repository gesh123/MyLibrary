
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourDetailsData } from "../data/SrvTourDetailsData";
import { PokerTournamentDetails1Data } from "../data/PokerTournamentDetails1Data";

import { PokerTournamentDetails1DataSerializer } from "../serializers/PokerTournamentDetails1DataSerializer";



export class SrvTourDetailsDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourDetailsData): void {
		PokerTournamentDetails1DataSerializer.serialize(buffer, data.tourDetailsVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourDetailsData): void {
		data.tourDetailsVO = new PokerTournamentDetails1Data(data); 
                        PokerTournamentDetails1DataSerializer.deserialize(buffer, data.tourDetailsVO);
			
	}
}
