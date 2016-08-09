
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvCardDealData } from "../data/SrvCardDealData";
import { UserCardPackData } from "../data/UserCardPackData";

import { UserCardPackDataSerializer } from "../serializers/UserCardPackDataSerializer";



export class SrvCardDealDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvCardDealData): void {
		
            for (let i = 0, l = data.playersCards.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.playersCards[i];
				UserCardPackDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvCardDealData): void {
		
            data.playersCards = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new UserCardPackData(data);
                UserCardPackDataSerializer.deserialize(buffer, temp);
                data.playersCards.push( temp );
            }
			
	}
}
