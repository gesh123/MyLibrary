
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourTableInfoData } from "../data/SrvTourTableInfoData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvTourTableInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourTableInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			bitsReader.setBits( data.subType, 3 );
			bitsReader.setBits( data.gameTypeIDShort, 4 );
			bitsReader.setBits( data.gameMasterType, 1 );
			buffer.setUint8( data.isRealMoney ? 1 : 0 );
			buffer.setUint8( data.seatsCount );
			buffer.setUTF16StringNullTerminated( data.gameName );
			buffer.setUint8( data.isWaitGame ? 1 : 0 );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.lowBet );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.highBet );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.bringIn );
			BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.gameBetType );
			buffer.setUint8( data.allowResing ? 1 : 0 );
			buffer.setUint8( data.tourType );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourTableInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			data.subType = bitsReader.getBits( 3 );
			data.gameTypeIDShort = bitsReader.getBits( 4 );
			data.gameMasterType = bitsReader.getBits( 1 );
			data.isRealMoney = buffer.getUint8() != 0;
			data.seatsCount = buffer.getUint8();
			data.gameName = buffer.getUTF16StringNullTerminated();
			data.isWaitGame = buffer.getUint8() != 0;
			data.lowBet = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.highBet = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.bringIn = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.gameBetType = buffer.getUint8();
			data.allowResing = buffer.getUint8() != 0;
			data.tourType = buffer.getUint8();
			
	}
}
