
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { GameActionNotifyData } from "../data/GameActionNotifyData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class GameActionNotifyDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: GameActionNotifyData): void {
		buffer.setUint8( data.seatID );
			buffer.setUint8( data.notify ? 1 : 0 );
			buffer.setUint32( data.actionID );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.freeMoney );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.tableMoney );
			buffer.setUint8( data.raisesLeft );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: GameActionNotifyData): void {
		data.seatID = buffer.getUint8();
			data.notify = buffer.getUint8() != 0;
			data.actionID = buffer.getUint32();
			data.freeMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.tableMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.raisesLeft = buffer.getUint8();
			
	}
}
