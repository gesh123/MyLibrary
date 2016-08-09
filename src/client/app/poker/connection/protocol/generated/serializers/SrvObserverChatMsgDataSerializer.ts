
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvObserverChatMsgData } from "../data/SrvObserverChatMsgData";


export class SrvObserverChatMsgDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvObserverChatMsgData): void {
		buffer.setUint32( data.franchiseID );
			buffer.setUTF16StringNullTerminated( data.userName );
			buffer.setUTF16StringNullTerminated( data.message );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvObserverChatMsgData): void {
		data.franchiseID = buffer.getUint32();
			data.userName = buffer.getUTF16StringNullTerminated();
			data.message = buffer.getUTF16StringNullTerminated();
			
	}
}
