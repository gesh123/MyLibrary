
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { GamePlayerTreasurePointsData } from "../data/GamePlayerTreasurePointsData";


export class GamePlayerTreasurePointsDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: GamePlayerTreasurePointsData): void {
		buffer.setUint8( data.seatID );
			buffer.setUint16( data.points );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: GamePlayerTreasurePointsData): void {
		data.seatID = buffer.getUint8();
			data.points = buffer.getUint16();
			
	}
}
