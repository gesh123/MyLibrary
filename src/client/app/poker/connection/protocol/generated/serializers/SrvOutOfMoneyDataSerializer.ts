
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvOutOfMoneyData } from "../data/SrvOutOfMoneyData";
import { TableStateUpdateData } from "../data/TableStateUpdateData";

import { TableStateUpdateDataSerializer } from "../serializers/TableStateUpdateDataSerializer";

import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvOutOfMoneyDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvOutOfMoneyData): void {
		TableStateUpdateDataSerializer.serialize(buffer, data.tableStateUpdate);
			OptimizedBinaryNumberSerializer.serialize( buffer, data.leftMoney );
			buffer.setUint8( data.errorCode );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvOutOfMoneyData): void {
		data.tableStateUpdate = new TableStateUpdateData(data); 
                        TableStateUpdateDataSerializer.deserialize(buffer, data.tableStateUpdate);
			data.leftMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.errorCode = buffer.getUint8();
			
	}
}
