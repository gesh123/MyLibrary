
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvSetJackpotsData } from "../data/SrvSetJackpotsData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvSetJackpotsDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvSetJackpotsData): void {
		OptimizedBinaryNumberSerializer.serialize( buffer, data.badBeatJackpot );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.rakeRaceJackpot );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvSetJackpotsData): void {
		data.badBeatJackpot = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.rakeRaceJackpot = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
