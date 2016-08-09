
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { GamePlayerDelayedFoldData } from "../data/GamePlayerDelayedFoldData";


export class GamePlayerDelayedFoldDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: GamePlayerDelayedFoldData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBits( data.seatID, 4 );
			bitsReader.setBits( data.reason, 4 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: GamePlayerDelayedFoldData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.seatID = bitsReader.getBits( 4 );
			data.reason = bitsReader.getBits( 4 );
			
	}
}
