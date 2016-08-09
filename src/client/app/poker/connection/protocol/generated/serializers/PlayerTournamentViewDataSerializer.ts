
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PlayerTournamentViewData } from "../data/PlayerTournamentViewData";
import { PokerPrizePoolInfoData } from "../data/PokerPrizePoolInfoData";

import { PokerPrizePoolInfoDataSerializer } from "../serializers/PokerPrizePoolInfoDataSerializer";

import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PlayerTournamentViewDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PlayerTournamentViewData): void {
		buffer.setUint16( data.playersCount );
			buffer.setUint16( data.position );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.averageChips );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.smallestStack );
			PokerPrizePoolInfoDataSerializer.serialize(buffer, data.prizePoolVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PlayerTournamentViewData): void {
		data.playersCount = buffer.getUint16();
			data.position = buffer.getUint16();
			data.averageChips = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.smallestStack = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.prizePoolVO = new PokerPrizePoolInfoData(data); 
                        PokerPrizePoolInfoDataSerializer.deserialize(buffer, data.prizePoolVO);
			
	}
}
