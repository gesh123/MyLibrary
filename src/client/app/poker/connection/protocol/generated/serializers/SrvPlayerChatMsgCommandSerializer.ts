
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvPlayerChatMsgCommand } from "../commands/SrvPlayerChatMsgCommand";
import { SrvPlayerChatMsgData } from "../data/SrvPlayerChatMsgData";
import { SrvPlayerChatMsgDataSerializer } from "./SrvPlayerChatMsgDataSerializer";


export class SrvPlayerChatMsgCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvPlayerChatMsgCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvPlayerChatMsgDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvPlayerChatMsgCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvPlayerChatMsgData();
            SrvPlayerChatMsgDataSerializer.deserialize(buffer, command.data);
	}
}
