
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { BetsMoneyData } from "../data/BetsMoneyData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class BetsMoneyDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: BetsMoneyData): void {
		buffer.setUint8( data.betSeatID );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.betMoney );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: BetsMoneyData): void {
		data.betSeatID = buffer.getUint8();
			data.betMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
