
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvGetExtraMoneyReplyCommand } from "../commands/SrvGetExtraMoneyReplyCommand";
import { SrvGetExtraMoneyReplyData } from "../data/SrvGetExtraMoneyReplyData";
import { SrvGetExtraMoneyReplyDataSerializer } from "./SrvGetExtraMoneyReplyDataSerializer";


export class SrvGetExtraMoneyReplyCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvGetExtraMoneyReplyCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvGetExtraMoneyReplyDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvGetExtraMoneyReplyCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvGetExtraMoneyReplyData();
            SrvGetExtraMoneyReplyDataSerializer.deserialize(buffer, command.data);
	}
}
