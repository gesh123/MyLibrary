
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvPlayersInRebuyGracePeriodData } from "../data/SrvPlayersInRebuyGracePeriodData";
import { PokerSeatGraceData } from "../data/PokerSeatGraceData";

import { PokerSeatGraceDataSerializer } from "../serializers/PokerSeatGraceDataSerializer";



export class SrvPlayersInRebuyGracePeriodDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvPlayersInRebuyGracePeriodData): void {
		
            for (let i = 0, l = data.seats.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.seats[i];
				PokerSeatGraceDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvPlayersInRebuyGracePeriodData): void {
		
            data.seats = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new PokerSeatGraceData(data);
                PokerSeatGraceDataSerializer.deserialize(buffer, temp);
                data.seats.push( temp );
            }
			
	}
}
