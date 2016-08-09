
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { GameUserActionData } from "../data/GameUserActionData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class GameUserActionDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: GameUserActionData): void {
		buffer.setUint32( data.actionID );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.minActionMoney );
			
            if (SerializerUtils.getParantDataValue(data, "minMaxMoneyUsed") == true){
                OptimizedBinaryNumberSerializer.serialize( buffer, data.maxActionMoney );
			
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: GameUserActionData): void {
		data.actionID = buffer.getUint32();
			data.minActionMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
            if (SerializerUtils.getParantDataValue(data, "minMaxMoneyUsed") == true){
                data.maxActionMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
            }
			
	}
}
