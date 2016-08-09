
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { NewsVOData } from "../data/NewsVOData";
import { GameSrvNewsMessageData } from "../data/GameSrvNewsMessageData";

import { GameSrvNewsMessageDataSerializer } from "../serializers/GameSrvNewsMessageDataSerializer";



export class NewsVODataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: NewsVOData): void {
		buffer.setUint32( data.index );
			GameSrvNewsMessageDataSerializer.serialize(buffer, data.messageData);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: NewsVOData): void {
		data.index = buffer.getUint32();
			data.messageData = new GameSrvNewsMessageData(data); 
                        GameSrvNewsMessageDataSerializer.deserialize(buffer, data.messageData);
			
	}
}
