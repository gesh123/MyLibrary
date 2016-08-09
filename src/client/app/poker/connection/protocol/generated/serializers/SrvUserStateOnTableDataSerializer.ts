
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUserStateOnTableData } from "../data/SrvUserStateOnTableData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvUserStateOnTableDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUserStateOnTableData): void {
		buffer.setUint8( data.seatID );
			buffer.setUint8( data.notify ? 1 : 0 );
			buffer.setUTF16StringNullTerminated( data.userNameOnTable );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.userGameMoney );
			buffer.setUint8( data.userGameState );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUserStateOnTableData): void {
		data.seatID = buffer.getUint8();
			data.notify = buffer.getUint8() != 0;
			data.userNameOnTable = buffer.getUTF16StringNullTerminated();
			data.userGameMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.userGameState = buffer.getUint8();
			
	}
}
