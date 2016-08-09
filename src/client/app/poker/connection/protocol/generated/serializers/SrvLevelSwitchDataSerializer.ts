
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvLevelSwitchData } from "../data/SrvLevelSwitchData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvLevelSwitchDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvLevelSwitchData): void {
		OptimizedBinaryNumberSerializer.serialize( buffer, data.ante );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.lowBet );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.highBet );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.bringIn );
			buffer.setUint16( data.level );
			buffer.setInt32( data.unitsToSwitch );
			buffer.setUint8( data.switchType );
			buffer.setUint8( data.isLevelSwitching ? 1 : 0 );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.nextLowBet );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.nextHighBet );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvLevelSwitchData): void {
		data.ante = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.lowBet = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.highBet = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.bringIn = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.level = buffer.getUint16();
			data.unitsToSwitch = buffer.getInt32();
			data.switchType = buffer.getUint8();
			data.isLevelSwitching = buffer.getUint8() != 0;
			data.nextLowBet = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.nextHighBet = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
