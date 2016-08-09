
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvPlayerChatMsgData } from "../data/SrvPlayerChatMsgData";


export class SrvPlayerChatMsgDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvPlayerChatMsgData): void {
		buffer.setUint8( data.seatID );
			buffer.setUTF16StringNullTerminated( data.message );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvPlayerChatMsgData): void {
		data.seatID = buffer.getUint8();
			data.message = buffer.getUTF16StringNullTerminated();
			
	}
}
