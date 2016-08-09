
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerPlayerInfoData } from "../data/PokerPlayerInfoData";
import { PokerShortRankData } from "../data/PokerShortRankData";

import { PokerShortRankDataSerializer } from "../serializers/PokerShortRankDataSerializer";

import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PokerPlayerInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerPlayerInfoData): void {
		buffer.setUTF16StringNullTerminated( data.name );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.gameMoney );
			buffer.setUTF16StringNullTerminated( data.city );
			buffer.setUint32( data.franchiseID );
			PokerShortRankDataSerializer.serialize(buffer, data.shortRankStructure);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerPlayerInfoData): void {
		data.name = buffer.getUTF16StringNullTerminated();
			data.gameMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.city = buffer.getUTF16StringNullTerminated();
			data.franchiseID = buffer.getUint32();
			data.shortRankStructure = new PokerShortRankData(data); 
                        PokerShortRankDataSerializer.deserialize(buffer, data.shortRankStructure);
			
	}
}
