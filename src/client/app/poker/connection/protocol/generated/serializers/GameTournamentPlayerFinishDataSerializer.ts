
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { GameTournamentPlayerFinishData } from "../data/GameTournamentPlayerFinishData";
import { PokerTournamentMoneyTypeData } from "../data/PokerTournamentMoneyTypeData";

import { PokerTournamentMoneyTypeDataSerializer } from "../serializers/PokerTournamentMoneyTypeDataSerializer";

import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class GameTournamentPlayerFinishDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: GameTournamentPlayerFinishData): void {
		buffer.setUint16( data.place );
			buffer.setUint16( data.kickedPlayersCount );
			PokerTournamentMoneyTypeDataSerializer.serialize(buffer, data.totalBountyAwards);
			OptimizedBinaryNumberSerializer.serialize( buffer, data.beastPoints );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.realMoneyPrize );
			buffer.setUint8( data.canReenter ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: GameTournamentPlayerFinishData): void {
		data.place = buffer.getUint16();
			data.kickedPlayersCount = buffer.getUint16();
			data.totalBountyAwards = new PokerTournamentMoneyTypeData(data); 
                        PokerTournamentMoneyTypeDataSerializer.deserialize(buffer, data.totalBountyAwards);
			data.beastPoints = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.realMoneyPrize = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.canReenter = buffer.getUint8() != 0;
			
	}
}
