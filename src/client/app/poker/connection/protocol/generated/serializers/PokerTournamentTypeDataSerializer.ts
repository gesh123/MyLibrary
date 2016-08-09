
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerTournamentTypeData } from "../data/PokerTournamentTypeData";


export class PokerTournamentTypeDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerTournamentTypeData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBit( data.isSpecial );
			bitsReader.setBit( data.isQualifier );
			bitsReader.setBit( data.isGuaranteed );
			bitsReader.setBit( data.isRegular );
			bitsReader.setBit( data.isPrivate );
			bitsReader.setBit( data.isLiveevent );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerTournamentTypeData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.isSpecial = bitsReader.getBit() != 0;
			data.isQualifier = bitsReader.getBit() != 0;
			data.isGuaranteed = bitsReader.getBit() != 0;
			data.isRegular = bitsReader.getBit() != 0;
			data.isPrivate = bitsReader.getBit() != 0;
			data.isLiveevent = bitsReader.getBit() != 0;
			
	}
}
