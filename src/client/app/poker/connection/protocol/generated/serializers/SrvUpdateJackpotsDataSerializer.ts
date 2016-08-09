
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUpdateJackpotsData } from "../data/SrvUpdateJackpotsData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvUpdateJackpotsDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUpdateJackpotsData): void {
		OptimizedBinaryNumberSerializer.serialize( buffer, data.badBeatJackpotDelta );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.rakeRaceJackpotDelta );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUpdateJackpotsData): void {
		data.badBeatJackpotDelta = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.rakeRaceJackpotDelta = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
