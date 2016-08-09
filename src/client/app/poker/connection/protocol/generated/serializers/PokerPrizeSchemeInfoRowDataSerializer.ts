
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerPrizeSchemeInfoRowData } from "../data/PokerPrizeSchemeInfoRowData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PokerPrizeSchemeInfoRowDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerPrizeSchemeInfoRowData): void {
		buffer.setUint32( data.place );
			buffer.setUint8( data.type );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.value );
			buffer.setUTF16StringNullTerminated( data.name );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerPrizeSchemeInfoRowData): void {
		data.place = buffer.getUint32();
			data.type = buffer.getUint8();
			data.value = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.name = buffer.getUTF16StringNullTerminated();
			
	}
}
