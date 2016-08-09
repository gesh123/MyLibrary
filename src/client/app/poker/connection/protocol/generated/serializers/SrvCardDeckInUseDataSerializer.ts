
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvCardDeckInUseData } from "../data/SrvCardDeckInUseData";


export class SrvCardDeckInUseDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvCardDeckInUseData): void {
		buffer.setUint8( data.deckType );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvCardDeckInUseData): void {
		data.deckType = buffer.getUint8();
			
	}
}
