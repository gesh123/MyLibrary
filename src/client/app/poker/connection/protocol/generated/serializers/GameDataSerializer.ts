
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { GameData } from "../data/GameData";
import { TableBaseStateData } from "../data/TableBaseStateData";
import { GameSeatData } from "../data/GameSeatData";

import { TableBaseStateDataSerializer } from "../serializers/TableBaseStateDataSerializer";
import { GameSeatDataSerializer } from "../serializers/GameSeatDataSerializer";



export class GameDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: GameData): void {
		TableBaseStateDataSerializer.serialize(buffer, data.tableBaseState);
			
            for (let i = 0, l = data.seats.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.seats[i];
				GameSeatDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: GameData): void {
		data.tableBaseState = new TableBaseStateData(data); 
                        TableBaseStateDataSerializer.deserialize(buffer, data.tableBaseState);
			
            data.seats = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new GameSeatData(data);
                GameSeatDataSerializer.deserialize(buffer, temp);
                data.seats.push( temp );
            }
			
	}
}
