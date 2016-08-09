
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTransferUncalledBetData } from "../data/SrvTransferUncalledBetData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvTransferUncalledBetDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTransferUncalledBetData): void {
		buffer.setUint8( data.seatID );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.uncalledBet );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTransferUncalledBetData): void {
		data.seatID = buffer.getUint8();
			data.uncalledBet = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
