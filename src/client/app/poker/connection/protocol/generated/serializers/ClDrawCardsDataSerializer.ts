
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClDrawCardsData } from "../data/ClDrawCardsData";
import { BinaryCard } from "../../core/data/BinaryCard";

import { BinaryCardSerializer } from "../../core/serializers/BinaryCardSerializer";



export class ClDrawCardsDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClDrawCardsData): void {
		
            for (let i = 0, l = data.cardsVect.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.cardsVect[i];
				BinaryCardSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClDrawCardsData): void {
		
            data.cardsVect = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new BinaryCard(data);
                BinaryCardSerializer.deserialize(buffer, temp);
                data.cardsVect.push( temp );
            }
			
	}
}
