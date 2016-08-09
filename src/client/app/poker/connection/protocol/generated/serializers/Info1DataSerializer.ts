
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { Info1Data } from "../data/Info1Data";
import { PokerTournamentData } from "../data/PokerTournamentData";
import { PokerTournamentDetailsData } from "../data/PokerTournamentDetailsData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTournamentDataSerializer } from "../serializers/PokerTournamentDataSerializer";
import { PokerTournamentDetailsDataSerializer } from "../serializers/PokerTournamentDetailsDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class Info1DataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: Info1Data): void {
		var bitsReader = new BitsReader( buffer );
		
			BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			bitsReader.setBits( data.subType, 3 );
			bitsReader.setBits( data.gameTypeIDShort, 4 );
			bitsReader.setBits( data.gameMasterType, 1 );
			buffer.setUint8( data.isRealMoneyTable ? 1 : 0 );
			buffer.setUint8( data.maxPlayers );
			buffer.setUTF16StringNullTerminated( data.gameName );
			buffer.setUint8( data.isWaitGame ? 1 : 0 );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.lowBet );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.highBet );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.bringIn );
			BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.gameBetType );
			buffer.setUint8( data.allowResign ? 1 : 0 );
			PokerTournamentDataSerializer.serialize(buffer, data.tourVO);
			buffer.setUint8( data.tourTabType );
			PokerTournamentDetailsDataSerializer.serialize(buffer, data.tourDetailsVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: Info1Data): void {
		var bitsReader = new BitsReader( buffer );
		
			data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			data.subType = bitsReader.getBits( 3 );
			data.gameTypeIDShort = bitsReader.getBits( 4 );
			data.gameMasterType = bitsReader.getBits( 1 );
			data.isRealMoneyTable = buffer.getUint8() != 0;
			data.maxPlayers = buffer.getUint8();
			data.gameName = buffer.getUTF16StringNullTerminated();
			data.isWaitGame = buffer.getUint8() != 0;
			data.lowBet = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.highBet = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.bringIn = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.gameBetType = buffer.getUint8();
			data.allowResign = buffer.getUint8() != 0;
			data.tourVO = new PokerTournamentData(data); 
                        PokerTournamentDataSerializer.deserialize(buffer, data.tourVO);
			data.tourTabType = buffer.getUint8();
			data.tourDetailsVO = new PokerTournamentDetailsData(data); 
                        PokerTournamentDetailsDataSerializer.deserialize(buffer, data.tourDetailsVO);
			
	}
}
