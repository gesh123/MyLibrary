
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClChatMsgCommand } from "../commands/ClChatMsgCommand";
import { ClChatMsgData } from "../data/ClChatMsgData";
import { ClChatMsgDataSerializer } from "./ClChatMsgDataSerializer";


export class ClChatMsgCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClChatMsgCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClChatMsgDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClChatMsgCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClChatMsgData();
            ClChatMsgDataSerializer.deserialize(buffer, command.data);
	}
}
