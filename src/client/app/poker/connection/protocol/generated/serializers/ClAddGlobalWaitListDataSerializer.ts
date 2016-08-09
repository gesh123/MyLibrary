
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClAddGlobalWaitListData } from "../data/ClAddGlobalWaitListData";
import { GameBetTypeData } from "../data/GameBetTypeData";

import { GameBetTypeDataSerializer } from "../serializers/GameBetTypeDataSerializer";

import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class ClAddGlobalWaitListDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClAddGlobalWaitListData): void {
		GameBetTypeDataSerializer.serialize(buffer, data.gameBetType);
			OptimizedBinaryNumberSerializer.serialize( buffer, data.lowBet );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.highBet );
			buffer.setInt32( data.minPlayers );
			buffer.setInt32( data.maxPlayers );
			buffer.setUint8( data.betType );
			buffer.setUint8( data.realMoney ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClAddGlobalWaitListData): void {
		data.gameBetType = new GameBetTypeData(data); 
                        GameBetTypeDataSerializer.deserialize(buffer, data.gameBetType);
			data.lowBet = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.highBet = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.minPlayers = buffer.getInt32();
			data.maxPlayers = buffer.getInt32();
			data.betType = buffer.getUint8();
			data.realMoney = buffer.getUint8() != 0;
			
	}
}
