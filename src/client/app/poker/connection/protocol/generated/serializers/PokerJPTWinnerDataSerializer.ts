
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerJPTWinnerData } from "../data/PokerJPTWinnerData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PokerJPTWinnerDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerJPTWinnerData): void {
		buffer.setUTF16StringNullTerminated( data.playerNickName );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.prize );
			buffer.setUint32( data.recentWinnerID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerJPTWinnerData): void {
		data.playerNickName = buffer.getUTF16StringNullTerminated();
			data.prize = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.recentWinnerID = buffer.getUint32();
			
	}
}
