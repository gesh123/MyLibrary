
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { UnsubscribeGameTypeData } from "../data/UnsubscribeGameTypeData";


export class UnsubscribeGameTypeDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: UnsubscribeGameTypeData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBits( data.subType, 3 );
			bitsReader.setBits( data.gameType, 4 );
			bitsReader.setBits( data.gameMasterType, 1 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: UnsubscribeGameTypeData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.subType = bitsReader.getBits( 3 );
			data.gameType = bitsReader.getBits( 4 );
			data.gameMasterType = bitsReader.getBits( 1 );
			
	}
}
