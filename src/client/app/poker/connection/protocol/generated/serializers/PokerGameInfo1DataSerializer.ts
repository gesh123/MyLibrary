
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerGameInfo1Data } from "../data/PokerGameInfo1Data";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PokerGameInfo1DataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerGameInfo1Data): void {
		var bitsReader = new BitsReader( buffer );
		
			BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			buffer.setUint8( data.gameTypeIDShort );
			buffer.setUint8( data.numPlayers );
			bitsReader.setBit( data.isLocal );
			bitsReader.setBit( data.isHwEnabled );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.averagePot );
			buffer.setUint8( data.waitingPlayers );
			buffer.setUint8( data.playersFlop );
			buffer.setUint8( data.gamesPerHour );
			buffer.setUint8( data.hideRanks ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerGameInfo1Data): void {
		var bitsReader = new BitsReader( buffer );
		
			data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			data.gameTypeIDShort = buffer.getUint8();
			data.numPlayers = buffer.getUint8();
			data.isLocal = bitsReader.getBit() != 0;
			data.isHwEnabled = bitsReader.getBit() != 0;
			data.averagePot = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.waitingPlayers = buffer.getUint8();
			data.playersFlop = buffer.getUint8();
			data.gamesPerHour = buffer.getUint8();
			data.hideRanks = buffer.getUint8() != 0;
			
	}
}
