
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvStartAddonGracePeriodData } from "../data/SrvStartAddonGracePeriodData";
import { PokerTimeData } from "../data/PokerTimeData";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";



export class SrvStartAddonGracePeriodDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvStartAddonGracePeriodData): void {
		
            for (let i = 0, l = data.seats.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.seats[i];
				buffer.setUint8( temp );
            }
			PokerTimeDataSerializer.serialize(buffer, data.endTime);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvStartAddonGracePeriodData): void {
		
            data.seats = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = buffer.getUint8();
                data.seats.push( temp );
            }
			data.endTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.endTime);
			
	}
}
