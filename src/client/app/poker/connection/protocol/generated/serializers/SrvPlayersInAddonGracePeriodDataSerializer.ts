
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvPlayersInAddonGracePeriodData } from "../data/SrvPlayersInAddonGracePeriodData";
import { PokerTimeData } from "../data/PokerTimeData";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";



export class SrvPlayersInAddonGracePeriodDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvPlayersInAddonGracePeriodData): void {
		
            for (let i = 0, l = data.seats.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.seats[i];
				buffer.setUint8( temp );
            }
			PokerTimeDataSerializer.serialize(buffer, data.endTime);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvPlayersInAddonGracePeriodData): void {
		
            data.seats = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = buffer.getUint8();
                data.seats.push( temp );
            }
			data.endTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.endTime);
			
	}
}
