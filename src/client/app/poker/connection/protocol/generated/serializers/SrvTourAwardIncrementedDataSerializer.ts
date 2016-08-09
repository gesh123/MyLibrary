
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourAwardIncrementedData } from "../data/SrvTourAwardIncrementedData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvTourAwardIncrementedDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourAwardIncrementedData): void {
		OptimizedBinaryNumberSerializer.serialize( buffer, data.totalAmount );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourAwardIncrementedData): void {
		data.totalAmount = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
