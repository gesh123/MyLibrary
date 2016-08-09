
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { MoneySeatData } from "../data/MoneySeatData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class MoneySeatDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: MoneySeatData): void {
		buffer.setUTF16StringNullTerminated( data.letterCode );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.money );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: MoneySeatData): void {
		data.letterCode = buffer.getUTF16StringNullTerminated();
			data.money = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
