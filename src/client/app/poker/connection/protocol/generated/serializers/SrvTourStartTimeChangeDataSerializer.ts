
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourStartTimeChangeData } from "../data/SrvTourStartTimeChangeData";
import { PokerTimeData } from "../data/PokerTimeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvTourStartTimeChangeDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourStartTimeChangeData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.networkID );
			PokerTimeDataSerializer.serialize(buffer, data.startTime);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourStartTimeChangeData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.networkID = buffer.getUint8();
			data.startTime = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.startTime);
			
	}
}
