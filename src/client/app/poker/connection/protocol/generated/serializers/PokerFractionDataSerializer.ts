
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerFractionData } from "../data/PokerFractionData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PokerFractionDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerFractionData): void {
		OptimizedBinaryNumberSerializer.serialize( buffer, data.numenator );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.denumenator );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerFractionData): void {
		data.numenator = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.denumenator = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
