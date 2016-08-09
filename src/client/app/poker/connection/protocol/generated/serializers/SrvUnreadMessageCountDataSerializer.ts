
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUnreadMessageCountData } from "../data/SrvUnreadMessageCountData";


export class SrvUnreadMessageCountDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUnreadMessageCountData): void {
		buffer.setUint16( data.messageCount );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUnreadMessageCountData): void {
		data.messageCount = buffer.getUint16();
			
	}
}
