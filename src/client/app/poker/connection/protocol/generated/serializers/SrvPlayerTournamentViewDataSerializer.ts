
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvPlayerTournamentViewData } from "../data/SrvPlayerTournamentViewData";
import { PlayerTournamentViewData } from "../data/PlayerTournamentViewData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PlayerTournamentViewDataSerializer } from "../serializers/PlayerTournamentViewDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvPlayerTournamentViewDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvPlayerTournamentViewData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			PlayerTournamentViewDataSerializer.serialize(buffer, data.playerTournamentView);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvPlayerTournamentViewData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.playerTournamentView = new PlayerTournamentViewData(data); 
                        PlayerTournamentViewDataSerializer.deserialize(buffer, data.playerTournamentView);
			
	}
}
