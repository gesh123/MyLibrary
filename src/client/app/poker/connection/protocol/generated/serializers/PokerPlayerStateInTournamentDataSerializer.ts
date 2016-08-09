
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerPlayerStateInTournamentData } from "../data/PokerPlayerStateInTournamentData";


export class PokerPlayerStateInTournamentDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerPlayerStateInTournamentData): void {
		buffer.setUint8( data.playerState );
			buffer.setUint8( data.reentersLeft );
			buffer.setUint8( data.buyPaidInFirstMoney ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerPlayerStateInTournamentData): void {
		data.playerState = buffer.getUint8();
			data.reentersLeft = buffer.getUint8();
			data.buyPaidInFirstMoney = buffer.getUint8() != 0;
			
	}
}
