
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerPlayerTournamentInfoData } from "../data/PokerPlayerTournamentInfoData";
import { PokerTimeData } from "../data/PokerTimeData";
import { PokerPlayerStateInTournamentData } from "../data/PokerPlayerStateInTournamentData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";
import { PokerPlayerStateInTournamentDataSerializer } from "../serializers/PokerPlayerStateInTournamentDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class PokerPlayerTournamentInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerPlayerTournamentInfoData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUTF16StringNullTerminated( data.name );
			PokerTimeDataSerializer.serialize(buffer, data.startDate);
			PokerPlayerStateInTournamentDataSerializer.serialize(buffer, data.playerStateInTour);
			buffer.setUint8( data.isJackpotTournament ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerPlayerTournamentInfoData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.name = buffer.getUTF16StringNullTerminated();
			data.startDate = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.startDate);
			data.playerStateInTour = new PokerPlayerStateInTournamentData(data); 
                        PokerPlayerStateInTournamentDataSerializer.deserialize(buffer, data.playerStateInTour);
			data.isJackpotTournament = buffer.getUint8() != 0;
			
	}
}
