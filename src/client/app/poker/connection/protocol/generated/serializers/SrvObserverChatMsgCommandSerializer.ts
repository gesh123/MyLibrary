
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvObserverChatMsgCommand } from "../commands/SrvObserverChatMsgCommand";
import { SrvObserverChatMsgData } from "../data/SrvObserverChatMsgData";
import { SrvObserverChatMsgDataSerializer } from "./SrvObserverChatMsgDataSerializer";


export class SrvObserverChatMsgCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvObserverChatMsgCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvObserverChatMsgDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvObserverChatMsgCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvObserverChatMsgData();
            SrvObserverChatMsgDataSerializer.deserialize(buffer, command.data);
	}
}
