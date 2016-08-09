
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvGameResetData } from "../data/SrvGameResetData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvGameResetDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvGameResetData): void {
		buffer.setUint8( data.resetToRound );
			buffer.setUint8( data.roundBeforeReset );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.totalDeductions );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvGameResetData): void {
		data.resetToRound = buffer.getUint8();
			data.roundBeforeReset = buffer.getUint8();
			data.totalDeductions = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
