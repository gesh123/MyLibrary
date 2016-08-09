
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerMyRunningTournamentData } from "../data/PokerMyRunningTournamentData";
import { PokerTournamentData } from "../data/PokerTournamentData";
import { PokerTournamentDetailsData } from "../data/PokerTournamentDetailsData";
import { PokerPlayerStateInTournamentData } from "../data/PokerPlayerStateInTournamentData";

import { PokerTournamentDataSerializer } from "../serializers/PokerTournamentDataSerializer";
import { PokerTournamentDetailsDataSerializer } from "../serializers/PokerTournamentDetailsDataSerializer";
import { PokerPlayerStateInTournamentDataSerializer } from "../serializers/PokerPlayerStateInTournamentDataSerializer";



export class PokerMyRunningTournamentDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerMyRunningTournamentData): void {
		buffer.setUint8( data.tourTabType );
			PokerTournamentDataSerializer.serialize(buffer, data.tournamentVO);
			PokerTournamentDetailsDataSerializer.serialize(buffer, data.tournamentDetailsInfo);
			PokerPlayerStateInTournamentDataSerializer.serialize(buffer, data.playerStateInTour);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerMyRunningTournamentData): void {
		data.tourTabType = buffer.getUint8();
			data.tournamentVO = new PokerTournamentData(data); 
                        PokerTournamentDataSerializer.deserialize(buffer, data.tournamentVO);
			data.tournamentDetailsInfo = new PokerTournamentDetailsData(data); 
                        PokerTournamentDetailsDataSerializer.deserialize(buffer, data.tournamentDetailsInfo);
			data.playerStateInTour = new PokerPlayerStateInTournamentData(data); 
                        PokerPlayerStateInTournamentDataSerializer.deserialize(buffer, data.playerStateInTour);
			
	}
}
