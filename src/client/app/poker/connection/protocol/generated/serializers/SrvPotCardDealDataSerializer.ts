
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvPotCardDealData } from "../data/SrvPotCardDealData";
import { UserCardPackData } from "../data/UserCardPackData";

import { UserCardPackDataSerializer } from "../serializers/UserCardPackDataSerializer";



export class SrvPotCardDealDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvPotCardDealData): void {
		
            for (let i = 0, l = data.cards.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.cards[i];
				UserCardPackDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvPotCardDealData): void {
		
            data.cards = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new UserCardPackData(data);
                UserCardPackDataSerializer.deserialize(buffer, temp);
                data.cards.push( temp );
            }
			
	}
}
