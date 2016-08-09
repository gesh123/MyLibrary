
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourLevelData } from "../data/SrvTourLevelData";
import { PokerTourLimitInfoData } from "../data/PokerTourLimitInfoData";
import { PokerTimeData } from "../data/PokerTimeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTourLimitInfoDataSerializer } from "../serializers/PokerTourLimitInfoDataSerializer";
import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvTourLevelDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourLevelData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.currentLevel );
			PokerTourLimitInfoDataSerializer.serialize(buffer, data.currentLevelLimitsInfo);
			buffer.setUint8( data.lastLevel ? 1 : 0 );
			
            if (data.lastLevel == false){
                PokerTimeDataSerializer.serialize(buffer, data.currentLevelEndDate);
			PokerTourLimitInfoDataSerializer.serialize(buffer, data.nextLevelLimitsInfo);
			
            }
			buffer.setUint32( data.version );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourLevelData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.currentLevel = buffer.getUint8();
			data.currentLevelLimitsInfo = new PokerTourLimitInfoData(data); 
                        PokerTourLimitInfoDataSerializer.deserialize(buffer, data.currentLevelLimitsInfo);
			data.lastLevel = buffer.getUint8() != 0;
			
            if (data.lastLevel == false){
                data.currentLevelEndDate = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.currentLevelEndDate);
			data.nextLevelLimitsInfo = new PokerTourLimitInfoData(data); 
                        PokerTourLimitInfoDataSerializer.deserialize(buffer, data.nextLevelLimitsInfo);
			
            }
			data.version = buffer.getUint32();
			
	}
}
