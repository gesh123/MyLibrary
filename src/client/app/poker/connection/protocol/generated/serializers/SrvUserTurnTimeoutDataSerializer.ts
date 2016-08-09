
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUserTurnTimeoutData } from "../data/SrvUserTurnTimeoutData";


export class SrvUserTurnTimeoutDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUserTurnTimeoutData): void {
		buffer.setUint8( data.replyTimeOut );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUserTurnTimeoutData): void {
		data.replyTimeOut = buffer.getUint8();
			
	}
}
