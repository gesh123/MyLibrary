
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClRplGetHandHistoryData } from "../data/ClRplGetHandHistoryData";
import { ReplayInfoData } from "../data/ReplayInfoData";

import { ReplayInfoDataSerializer } from "../serializers/ReplayInfoDataSerializer";



export class ClRplGetHandHistoryDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClRplGetHandHistoryData): void {
		buffer.setUint32( data.mask );
			
            for (let i = 0, l = data.replayInfoVector.length , t = buffer.setUint32( l ); i < l; i++){
                let temp = data.replayInfoVector[i];
				ReplayInfoDataSerializer.serialize(buffer, temp);
            }
			buffer.setUint8( data.isTourHandHistory ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClRplGetHandHistoryData): void {
		data.mask = buffer.getUint32();
			
            data.replayInfoVector = []; 
            for (let i = 0, l = buffer.getUint32(); i < l; i++){
                let temp = new ReplayInfoData(data);
                ReplayInfoDataSerializer.deserialize(buffer, temp);
                data.replayInfoVector.push( temp );
            }
			data.isTourHandHistory = buffer.getUint8() != 0;
			
	}
}
