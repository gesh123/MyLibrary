
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUserTurnExtraTimeoutData } from "../data/SrvUserTurnExtraTimeoutData";


export class SrvUserTurnExtraTimeoutDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUserTurnExtraTimeoutData): void {
		buffer.setUint16( data.replyTimeOut );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUserTurnExtraTimeoutData): void {
		data.replyTimeOut = buffer.getUint16();
			
	}
}
