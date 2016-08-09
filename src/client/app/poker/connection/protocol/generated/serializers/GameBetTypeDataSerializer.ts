
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { GameBetTypeData } from "../data/GameBetTypeData";


export class GameBetTypeDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: GameBetTypeData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBits( data.subType, 3 );
			bitsReader.setBits( data.gameType, 4 );
			bitsReader.setBits( data.gameMasterType, 1 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: GameBetTypeData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.subType = bitsReader.getBits( 3 );
			data.gameType = bitsReader.getBits( 4 );
			data.gameMasterType = bitsReader.getBits( 1 );
			
	}
}
