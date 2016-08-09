
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvPlayerTourInfoData } from "../data/SrvPlayerTourInfoData";
import { PokerPlayerTournamentInfoData } from "../data/PokerPlayerTournamentInfoData";

import { PokerPlayerTournamentInfoDataSerializer } from "../serializers/PokerPlayerTournamentInfoDataSerializer";



export class SrvPlayerTourInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvPlayerTourInfoData): void {
		PokerPlayerTournamentInfoDataSerializer.serialize(buffer, data.playerTourInfoVO);
			buffer.setUint8( data.networkID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvPlayerTourInfoData): void {
		data.playerTourInfoVO = new PokerPlayerTournamentInfoData(data); 
                        PokerPlayerTournamentInfoDataSerializer.deserialize(buffer, data.playerTourInfoVO);
			data.networkID = buffer.getUint8();
			
	}
}
