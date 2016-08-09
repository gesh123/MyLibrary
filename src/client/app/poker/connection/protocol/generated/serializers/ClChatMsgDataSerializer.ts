
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClChatMsgData } from "../data/ClChatMsgData";


export class ClChatMsgDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClChatMsgData): void {
		buffer.setUTF16StringNullTerminated( data.message );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClChatMsgData): void {
		data.message = buffer.getUTF16StringNullTerminated();
			
	}
}
