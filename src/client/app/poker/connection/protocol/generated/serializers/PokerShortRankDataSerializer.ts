
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerShortRankData } from "../data/PokerShortRankData";


export class PokerShortRankDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerShortRankData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBits( data.rankValue, 7 );
			bitsReader.setBit( data.isNew );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerShortRankData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.rankValue = bitsReader.getBits( 7 );
			data.isNew = bitsReader.getBit() != 0;
			
	}
}
