
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTableStateData } from "../data/SrvTableStateData";
import { GameData } from "../data/GameData";

import { GameDataSerializer } from "../serializers/GameDataSerializer";



export class SrvTableStateDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTableStateData): void {
		GameDataSerializer.serialize(buffer, data.game);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTableStateData): void {
		data.game = new GameData(data); 
                        GameDataSerializer.deserialize(buffer, data.game);
			
	}
}
