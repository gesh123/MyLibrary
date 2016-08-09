
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { GameSeatData } from "../data/GameSeatData";
import { BinaryCard } from "../../core/data/BinaryCard";

import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";
import { BinaryCardSerializer } from "../../core/serializers/BinaryCardSerializer";



export class GameSeatDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: GameSeatData): void {
		buffer.setUint8( data.seatID );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.freeMoney );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.tableMoney );
			buffer.setUTF16StringNullTerminated( data.playerName );
			buffer.setUint32( data.franchiseID );
			buffer.setUint8( data.state );
			
            for (let i = 0, l = data.cards.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.cards[i];
				BinaryCardSerializer.serialize(buffer, temp);
            }
			buffer.setUint8( data.sign );
			buffer.setUint8( data.playerType );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: GameSeatData): void {
		data.seatID = buffer.getUint8();
			data.freeMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.tableMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.playerName = buffer.getUTF16StringNullTerminated();
			data.franchiseID = buffer.getUint32();
			data.state = buffer.getUint8();
			
            data.cards = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new BinaryCard(data);
                BinaryCardSerializer.deserialize(buffer, temp);
                data.cards.push( temp );
            }
			data.sign = buffer.getUint8();
			data.playerType = buffer.getUint8();
			
	}
}
