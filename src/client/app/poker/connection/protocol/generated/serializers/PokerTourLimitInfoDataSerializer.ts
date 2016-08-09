
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerTourLimitInfoData } from "../data/PokerTourLimitInfoData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PokerTourLimitInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerTourLimitInfoData): void {
		OptimizedBinaryNumberSerializer.serialize( buffer, data.ante );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.bringIn );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.tourAnte );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.lowBet );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.hiBet );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerTourLimitInfoData): void {
		data.ante = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.bringIn = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.tourAnte = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.lowBet = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.hiBet = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
