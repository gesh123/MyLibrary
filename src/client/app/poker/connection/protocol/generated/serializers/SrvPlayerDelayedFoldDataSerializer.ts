
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvPlayerDelayedFoldData } from "../data/SrvPlayerDelayedFoldData";
import { GamePlayerDelayedFoldData } from "../data/GamePlayerDelayedFoldData";

import { GamePlayerDelayedFoldDataSerializer } from "../serializers/GamePlayerDelayedFoldDataSerializer";



export class SrvPlayerDelayedFoldDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvPlayerDelayedFoldData): void {
		GamePlayerDelayedFoldDataSerializer.serialize(buffer, data.reasonVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvPlayerDelayedFoldData): void {
		data.reasonVO = new GamePlayerDelayedFoldData(data); 
                        GamePlayerDelayedFoldDataSerializer.deserialize(buffer, data.reasonVO);
			
	}
}
