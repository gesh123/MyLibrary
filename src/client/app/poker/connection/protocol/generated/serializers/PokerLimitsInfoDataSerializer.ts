
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerLimitsInfoData } from "../data/PokerLimitsInfoData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PokerLimitsInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerLimitsInfoData): void {
		buffer.setUint8( data.level );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.lowStake );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.highStake );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.ante );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerLimitsInfoData): void {
		data.level = buffer.getUint8();
			data.lowStake = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.highStake = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.ante = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
