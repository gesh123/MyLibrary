
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourTimesData } from "../data/SrvTourTimesData";
import { PokerTourTimeInfoData } from "../data/PokerTourTimeInfoData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTourTimeInfoDataSerializer } from "../serializers/PokerTourTimeInfoDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvTourTimesDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourTimesData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint32( data.version );
			PokerTourTimeInfoDataSerializer.serialize(buffer, data.tourTimeInfo);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourTimesData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.version = buffer.getUint32();
			data.tourTimeInfo = new PokerTourTimeInfoData(data); 
                        PokerTourTimeInfoDataSerializer.deserialize(buffer, data.tourTimeInfo);
			
	}
}
