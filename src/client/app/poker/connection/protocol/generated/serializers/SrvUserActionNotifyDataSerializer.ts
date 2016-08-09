
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUserActionNotifyData } from "../data/SrvUserActionNotifyData";
import { GameActionNotifyData } from "../data/GameActionNotifyData";

import { GameActionNotifyDataSerializer } from "../serializers/GameActionNotifyDataSerializer";



export class SrvUserActionNotifyDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUserActionNotifyData): void {
		GameActionNotifyDataSerializer.serialize(buffer, data.actionNotifyVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUserActionNotifyData): void {
		data.actionNotifyVO = new GameActionNotifyData(data); 
                        GameActionNotifyDataSerializer.deserialize(buffer, data.actionNotifyVO);
			
	}
}
