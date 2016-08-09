
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClRemoveFromWaitListCommand } from "../commands/ClRemoveFromWaitListCommand";
import { ClRemoveFromWaitListData } from "../data/ClRemoveFromWaitListData";
import { ClRemoveFromWaitListDataSerializer } from "./ClRemoveFromWaitListDataSerializer";


export class ClRemoveFromWaitListCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClRemoveFromWaitListCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClRemoveFromWaitListDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClRemoveFromWaitListCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClRemoveFromWaitListData();
            ClRemoveFromWaitListDataSerializer.deserialize(buffer, command.data);
	}
}
