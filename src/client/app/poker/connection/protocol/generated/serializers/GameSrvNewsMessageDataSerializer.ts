
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { GameSrvNewsMessageData } from "../data/GameSrvNewsMessageData";


export class GameSrvNewsMessageDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: GameSrvNewsMessageData): void {
		buffer.setUint8( data.appearanceType );
			buffer.setUTF16StringNullTerminated( data.message );
			buffer.setUTF16StringNullTerminated( data.sender );
			buffer.setUint32( data.timeout );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: GameSrvNewsMessageData): void {
		data.appearanceType = buffer.getUint8();
			data.message = buffer.getUTF16StringNullTerminated();
			data.sender = buffer.getUTF16StringNullTerminated();
			data.timeout = buffer.getUint32();
			
	}
}
