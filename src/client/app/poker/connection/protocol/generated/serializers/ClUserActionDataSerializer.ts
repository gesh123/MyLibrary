
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClUserActionData } from "../data/ClUserActionData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class ClUserActionDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClUserActionData): void {
		buffer.setUint32( data.userActionID );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.moneyAmount );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClUserActionData): void {
		data.userActionID = buffer.getUint32();
			data.moneyAmount = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
