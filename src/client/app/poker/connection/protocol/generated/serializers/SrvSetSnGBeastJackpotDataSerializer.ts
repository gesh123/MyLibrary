
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvSetSnGBeastJackpotData } from "../data/SrvSetSnGBeastJackpotData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvSetSnGBeastJackpotDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvSetSnGBeastJackpotData): void {
		OptimizedBinaryNumberSerializer.serialize( buffer, data.amount );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvSetSnGBeastJackpotData): void {
		data.amount = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
