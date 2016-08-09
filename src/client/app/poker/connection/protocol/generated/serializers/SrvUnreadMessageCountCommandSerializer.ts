
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUnreadMessageCountCommand } from "../commands/SrvUnreadMessageCountCommand";
import { SrvUnreadMessageCountData } from "../data/SrvUnreadMessageCountData";
import { SrvUnreadMessageCountDataSerializer } from "./SrvUnreadMessageCountDataSerializer";


export class SrvUnreadMessageCountCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUnreadMessageCountCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUnreadMessageCountDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUnreadMessageCountCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUnreadMessageCountData();
            SrvUnreadMessageCountDataSerializer.deserialize(buffer, command.data);
	}
}
