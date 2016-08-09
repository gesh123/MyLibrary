
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvMoneyData } from "../data/SrvMoneyData";
import { PokerTimeData } from "../data/PokerTimeData";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";

import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvMoneyDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvMoneyData): void {
		OptimizedBinaryNumberSerializer.serialize( buffer, data.minStartMoney );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.maxStartMoney );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.playerBalance );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.playerTableMoney );
			buffer.setUint8( data.hasRestrictions ? 1 : 0 );
			
            if (data.hasRestrictions == true){
                PokerTimeDataSerializer.serialize(buffer, data.timeRestriction);
			OptimizedBinaryNumberSerializer.serialize( buffer, data.moneyRestriction );
			
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvMoneyData): void {
		data.minStartMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.maxStartMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.playerBalance = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.playerTableMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.hasRestrictions = buffer.getUint8() != 0;
			
            if (data.hasRestrictions == true){
                data.timeRestriction = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.timeRestriction);
			data.moneyRestriction = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
            }
			
	}
}
