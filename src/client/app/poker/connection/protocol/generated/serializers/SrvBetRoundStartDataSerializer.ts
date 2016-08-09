
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvBetRoundStartData } from "../data/SrvBetRoundStartData";


export class SrvBetRoundStartDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvBetRoundStartData): void {
		buffer.setUint8( data.round );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvBetRoundStartData): void {
		data.round = buffer.getUint8();
			
	}
}
