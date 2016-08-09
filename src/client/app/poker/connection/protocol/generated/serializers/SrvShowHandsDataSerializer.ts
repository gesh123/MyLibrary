
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvShowHandsData } from "../data/SrvShowHandsData";
import { HandInfoData } from "../data/HandInfoData";

import { HandInfoDataSerializer } from "../serializers/HandInfoDataSerializer";



export class SrvShowHandsDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvShowHandsData): void {
		
            for (let i = 0, l = data.showHandListEvalLowHand.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.showHandListEvalLowHand[i];
				HandInfoDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvShowHandsData): void {
		
            data.showHandListEvalLowHand = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new HandInfoData(data);
                HandInfoDataSerializer.deserialize(buffer, temp);
                data.showHandListEvalLowHand.push( temp );
            }
			
	}
}
