
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClMoreMoneyData } from "../data/ClMoreMoneyData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class ClMoreMoneyDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClMoreMoneyData): void {
		OptimizedBinaryNumberSerializer.serialize( buffer, data.moneyAmount );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClMoreMoneyData): void {
		data.moneyAmount = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
