
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvDeadBetData } from "../data/SrvDeadBetData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvDeadBetDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvDeadBetData): void {
		buffer.setUint8( data.seatID );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.deadBetValue );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvDeadBetData): void {
		data.seatID = buffer.getUint8();
			data.deadBetValue = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
