
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvCashierStatusData } from "../data/SrvCashierStatusData";
import { MoneySeatData } from "../data/MoneySeatData";

import { MoneySeatDataSerializer } from "../serializers/MoneySeatDataSerializer";



export class SrvCashierStatusDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvCashierStatusData): void {
		
            for (let i = 0, l = data.playerCashierStatus.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.playerCashierStatus[i];
				MoneySeatDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvCashierStatusData): void {
		
            data.playerCashierStatus = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new MoneySeatData(data);
                MoneySeatDataSerializer.deserialize(buffer, temp);
                data.playerCashierStatus.push( temp );
            }
			
	}
}
