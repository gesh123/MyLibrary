
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { RankInfoData } from "../data/RankInfoData";
import { PokerShortRankData } from "../data/PokerShortRankData";

import { PokerShortRankDataSerializer } from "../serializers/PokerShortRankDataSerializer";



export class RankInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: RankInfoData): void {
		buffer.setUint8( data.seatID );
			PokerShortRankDataSerializer.serialize(buffer, data.shortRankStructure);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: RankInfoData): void {
		data.seatID = buffer.getUint8();
			data.shortRankStructure = new PokerShortRankData(data); 
                        PokerShortRankDataSerializer.deserialize(buffer, data.shortRankStructure);
			
	}
}
