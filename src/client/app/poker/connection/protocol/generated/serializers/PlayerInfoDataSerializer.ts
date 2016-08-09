
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PlayerInfoData } from "../data/PlayerInfoData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PlayerInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PlayerInfoData): void {
		buffer.setUint8( data.seatID );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.money );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PlayerInfoData): void {
		data.seatID = buffer.getUint8();
			data.money = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
