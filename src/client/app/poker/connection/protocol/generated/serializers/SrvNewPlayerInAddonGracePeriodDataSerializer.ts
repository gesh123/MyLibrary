
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvNewPlayerInAddonGracePeriodData } from "../data/SrvNewPlayerInAddonGracePeriodData";
import { PokerTimeData } from "../data/PokerTimeData";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";



export class SrvNewPlayerInAddonGracePeriodDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvNewPlayerInAddonGracePeriodData): void {
		buffer.setUint8( data.seatID );
			PokerTimeDataSerializer.serialize(buffer, data.endTime);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvNewPlayerInAddonGracePeriodData): void {
		data.seatID = buffer.getUint8();
			data.endTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.endTime);
			
	}
}
