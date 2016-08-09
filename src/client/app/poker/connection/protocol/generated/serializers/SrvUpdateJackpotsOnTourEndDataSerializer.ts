
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUpdateJackpotsOnTourEndData } from "../data/SrvUpdateJackpotsOnTourEndData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvUpdateJackpotsOnTourEndDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUpdateJackpotsOnTourEndData): void {
		OptimizedBinaryNumberSerializer.serialize( buffer, data.amount );
			buffer.setUint32( data.version );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUpdateJackpotsOnTourEndData): void {
		data.amount = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.version = buffer.getUint32();
			
	}
}
