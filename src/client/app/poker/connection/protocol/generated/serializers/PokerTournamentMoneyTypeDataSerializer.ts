
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerTournamentMoneyTypeData } from "../data/PokerTournamentMoneyTypeData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PokerTournamentMoneyTypeDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerTournamentMoneyTypeData): void {
		buffer.setUint8( data.isZero ? 1 : 0 );
			
            if (data.isZero == false){
                OptimizedBinaryNumberSerializer.serialize( buffer, data.realMoney );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.compMoney );
			buffer.setUint8( data.bothNeeded ? 1 : 0 );
			
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerTournamentMoneyTypeData): void {
		data.isZero = buffer.getUint8() != 0;
			
            if (data.isZero == false){
                data.realMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.compMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.bothNeeded = buffer.getUint8() != 0;
			
            }
			
	}
}
