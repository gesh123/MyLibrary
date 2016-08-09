
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerGameInfoData } from "../data/PokerGameInfoData";
import { PokerShortRankData } from "../data/PokerShortRankData";
import { PokerTournamentTypeData } from "../data/PokerTournamentTypeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerShortRankDataSerializer } from "../serializers/PokerShortRankDataSerializer";
import { PokerTournamentTypeDataSerializer } from "../serializers/PokerTournamentTypeDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PokerGameInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerGameInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			buffer.setUint8( data.numPlayers );
			buffer.setUTF16StringNullTerminated( data.gameName );
			BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			buffer.setUint8( data.gameTypeIDShort );
			buffer.setUint8( data.maxPlayers );
			buffer.setUint8( data.isRealMoneyTable ? 1 : 0 );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.lowBet );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.highBet );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.ante );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.bringIn );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.minStartMoney );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.maxStartMoney );
			buffer.setUint8( data.gameBetType );
			buffer.setUint16( data.secPlayerCantReturnLessMoney );
			bitsReader.setBit( data.isLocal );
			bitsReader.setBit( data.isHwEnabled );
			PokerShortRankDataSerializer.serialize(buffer, data.shortRankStructure);
			buffer.setUint8( data.serverID );
			buffer.setUint8( data.networkID );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.averagePot );
			buffer.setUint8( data.waitingPlayers );
			buffer.setUint8( data.playersFlop );
			buffer.setUint8( data.gamesPerHour );
			PokerTournamentTypeDataSerializer.serialize(buffer, data.tournamentType);
			BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setInt32( data.langID );
			buffer.setUint8( data.hideRanks ? 1 : 0 );
			buffer.setUint8( data.badBeatEnabled ? 1 : 0 );
			buffer.setUint8( data.rakeRaceEnabled ? 1 : 0 );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.perHandCap );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerGameInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.numPlayers = buffer.getUint8();
			data.gameName = buffer.getUTF16StringNullTerminated();
			data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			data.gameTypeIDShort = buffer.getUint8();
			data.maxPlayers = buffer.getUint8();
			data.isRealMoneyTable = buffer.getUint8() != 0;
			data.lowBet = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.highBet = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.ante = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.bringIn = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.minStartMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.maxStartMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.gameBetType = buffer.getUint8();
			data.secPlayerCantReturnLessMoney = buffer.getUint16();
			data.isLocal = bitsReader.getBit() != 0;
			data.isHwEnabled = bitsReader.getBit() != 0;
			data.shortRankStructure = new PokerShortRankData(data); 
                        PokerShortRankDataSerializer.deserialize(buffer, data.shortRankStructure);
			data.serverID = buffer.getUint8();
			data.networkID = buffer.getUint8();
			data.averagePot = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.waitingPlayers = buffer.getUint8();
			data.playersFlop = buffer.getUint8();
			data.gamesPerHour = buffer.getUint8();
			data.tournamentType = new PokerTournamentTypeData(data); 
                        PokerTournamentTypeDataSerializer.deserialize(buffer, data.tournamentType);
			data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.langID = buffer.getInt32();
			data.hideRanks = buffer.getUint8() != 0;
			data.badBeatEnabled = buffer.getUint8() != 0;
			data.rakeRaceEnabled = buffer.getUint8() != 0;
			data.perHandCap = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
