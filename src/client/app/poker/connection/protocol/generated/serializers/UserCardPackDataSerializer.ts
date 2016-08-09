
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { UserCardPackData } from "../data/UserCardPackData";
import { BinaryCard } from "../../core/data/BinaryCard";

import { BinaryCardSerializer } from "../../core/serializers/BinaryCardSerializer";



export class UserCardPackDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: UserCardPackData): void {
		buffer.setUint8( data.seatID );
			
            for (let i = 0, l = data.cards.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.cards[i];
				BinaryCardSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: UserCardPackData): void {
		data.seatID = buffer.getUint8();
			
            data.cards = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new BinaryCard(data);
                BinaryCardSerializer.deserialize(buffer, temp);
                data.cards.push( temp );
            }
			
	}
}
