
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClActionInAdvanceData } from "../data/ClActionInAdvanceData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class ClActionInAdvanceDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClActionInAdvanceData): void {
		buffer.setUint32( data.actions );
			buffer.setUint8( data.onOff ? 1 : 0 );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.actionMoney );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClActionInAdvanceData): void {
		data.actions = buffer.getUint32();
			data.onOff = buffer.getUint8() != 0;
			data.actionMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
