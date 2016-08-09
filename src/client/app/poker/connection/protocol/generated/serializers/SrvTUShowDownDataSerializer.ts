
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTUShowDownData } from "../data/SrvTUShowDownData";
import { VisibleCardData } from "../data/VisibleCardData";
import { SeatMoneyData } from "../data/SeatMoneyData";
import { BetsMoneyData } from "../data/BetsMoneyData";

import { VisibleCardDataSerializer } from "../serializers/VisibleCardDataSerializer";
import { SeatMoneyDataSerializer } from "../serializers/SeatMoneyDataSerializer";
import { BetsMoneyDataSerializer } from "../serializers/BetsMoneyDataSerializer";

import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvTUShowDownDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTUShowDownData): void {
		buffer.setUint8( data.seatID );
			buffer.setUint8( data.notify ? 1 : 0 );
			
            for (let i = 0, l = data.visibleCards.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.visibleCards[i];
				VisibleCardDataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.wins.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.wins[i];
				SeatMoneyDataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.bets.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.bets[i];
				BetsMoneyDataSerializer.serialize(buffer, temp);
            }
			OptimizedBinaryNumberSerializer.serialize( buffer, data.casinoProfit );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.bbjFee );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTUShowDownData): void {
		data.seatID = buffer.getUint8();
			data.notify = buffer.getUint8() != 0;
			
            data.visibleCards = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new VisibleCardData(data);
                VisibleCardDataSerializer.deserialize(buffer, temp);
                data.visibleCards.push( temp );
            }
			
            data.wins = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new SeatMoneyData(data);
                SeatMoneyDataSerializer.deserialize(buffer, temp);
                data.wins.push( temp );
            }
			
            data.bets = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new BetsMoneyData(data);
                BetsMoneyDataSerializer.deserialize(buffer, temp);
                data.bets.push( temp );
            }
			data.casinoProfit = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.bbjFee = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
