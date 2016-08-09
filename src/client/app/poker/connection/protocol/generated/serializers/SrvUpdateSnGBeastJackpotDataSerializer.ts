
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUpdateSnGBeastJackpotData } from "../data/SrvUpdateSnGBeastJackpotData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvUpdateSnGBeastJackpotDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUpdateSnGBeastJackpotData): void {
		OptimizedBinaryNumberSerializer.serialize( buffer, data.delta );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUpdateSnGBeastJackpotData): void {
		data.delta = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
