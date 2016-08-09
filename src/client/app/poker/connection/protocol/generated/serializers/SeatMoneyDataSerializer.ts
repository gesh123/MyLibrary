
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SeatMoneyData } from "../data/SeatMoneyData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SeatMoneyDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SeatMoneyData): void {
		buffer.setUint8( data.winSeatID );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.winMoney );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SeatMoneyData): void {
		data.winSeatID = buffer.getUint8();
			data.winMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
