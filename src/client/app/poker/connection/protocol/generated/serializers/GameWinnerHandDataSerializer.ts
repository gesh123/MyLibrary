
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { GameWinnerHandData } from "../data/GameWinnerHandData";
import { BinaryCard } from "../../core/data/BinaryCard";

import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";
import { BinaryCardSerializer } from "../../core/serializers/BinaryCardSerializer";



export class GameWinnerHandDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: GameWinnerHandData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBits( data.seatID, 4 );
			bitsReader.setBit( data.isRealMoney );
			bitsReader.setBit( data.showFractal );
			bitsReader.setBit( data.formatAsPromoBucks );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.winnerMoney );
			bitsReader.setBits( data.sidePotID, 4 );
			bitsReader.setBit( data.isLow );
			bitsReader.setBit( data.hasSidePots );
			bitsReader.setBits( data.kickerType, 2 );
			buffer.setUint8( data.handType );
			
            for (let i = 0, l = data.usedCards.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.usedCards[i];
				BinaryCardSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.unUsedCards.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.unUsedCards[i];
				BinaryCardSerializer.serialize(buffer, temp);
            }
			
            if (data.kickerType == 1){
                buffer.setUint8( data.kicker1 );
			
            }
			
            if (data.kickerType == 2){
                buffer.setUint8( data.kicker1 );
			
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: GameWinnerHandData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.seatID = bitsReader.getBits( 4 );
			data.isRealMoney = bitsReader.getBit() != 0;
			data.showFractal = bitsReader.getBit() != 0;
			data.formatAsPromoBucks = bitsReader.getBit() != 0;
			data.winnerMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.sidePotID = bitsReader.getBits( 4 );
			data.isLow = bitsReader.getBit() != 0;
			data.hasSidePots = bitsReader.getBit() != 0;
			data.kickerType = bitsReader.getBits( 2 );
			data.handType = buffer.getUint8();
			
            data.usedCards = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new BinaryCard(data);
                BinaryCardSerializer.deserialize(buffer, temp);
                data.usedCards.push( temp );
            }
			
            data.unUsedCards = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new BinaryCard(data);
                BinaryCardSerializer.deserialize(buffer, temp);
                data.unUsedCards.push( temp );
            }
			
            if (data.kickerType == 1){
                data.kicker1 = buffer.getUint8();
			
            }
			
            if (data.kickerType == 2){
                data.kicker1 = buffer.getUint8();
			
            }
			
	}
}
