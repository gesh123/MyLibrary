
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTakeSeatInfoData } from "../data/SrvTakeSeatInfoData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvTakeSeatInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTakeSeatInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			buffer.setUint8( data.tourTabType );
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
			buffer.setUint8( data.serverID );
			buffer.setUint8( data.networkID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTakeSeatInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.tourTabType = buffer.getUint8();
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
			data.serverID = buffer.getUint8();
			data.networkID = buffer.getUint8();
			
	}
}
