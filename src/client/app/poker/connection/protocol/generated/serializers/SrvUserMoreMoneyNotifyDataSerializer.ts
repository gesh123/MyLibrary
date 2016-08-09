
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUserMoreMoneyNotifyData } from "../data/SrvUserMoreMoneyNotifyData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvUserMoreMoneyNotifyDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUserMoreMoneyNotifyData): void {
		OptimizedBinaryNumberSerializer.serialize( buffer, data.addedMoney );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUserMoreMoneyNotifyData): void {
		data.addedMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
