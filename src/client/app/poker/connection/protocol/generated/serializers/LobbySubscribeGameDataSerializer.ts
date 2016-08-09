
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { LobbySubscribeGameData } from "../data/LobbySubscribeGameData";


export class LobbySubscribeGameDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: LobbySubscribeGameData): void {
		var bitsReader = new BitsReader( buffer );
		
			buffer.setUint32( data.version );
			bitsReader.setBits( data.subType, 3 );
			bitsReader.setBits( data.gameType, 4 );
			bitsReader.setBits( data.gameMasterType, 1 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: LobbySubscribeGameData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.version = buffer.getUint32();
			data.subType = bitsReader.getBits( 3 );
			data.gameType = bitsReader.getBits( 4 );
			data.gameMasterType = bitsReader.getBits( 1 );
			
	}
}
