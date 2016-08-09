
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { TurnOptionsData } from "../data/TurnOptionsData";
import { GameUserActionData } from "../data/GameUserActionData";

import { GameUserActionDataSerializer } from "../serializers/GameUserActionDataSerializer";



export class TurnOptionsDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: TurnOptionsData): void {
		buffer.setUint8( data.minMaxMoneyUsed ? 1 : 0 );
			
            for (let i = 0, l = data.possibleUserActions.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.possibleUserActions[i];
				GameUserActionDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: TurnOptionsData): void {
		data.minMaxMoneyUsed = buffer.getUint8() != 0;
			
            data.possibleUserActions = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new GameUserActionData(data);
                GameUserActionDataSerializer.deserialize(buffer, temp);
                data.possibleUserActions.push( temp );
            }
			
	}
}
