
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClAddToWaitListCommand } from "../commands/ClAddToWaitListCommand";
import { ClAddToWaitListData } from "../data/ClAddToWaitListData";
import { ClAddToWaitListDataSerializer } from "./ClAddToWaitListDataSerializer";


export class ClAddToWaitListCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClAddToWaitListCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClAddToWaitListDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClAddToWaitListCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClAddToWaitListData();
            ClAddToWaitListDataSerializer.deserialize(buffer, command.data);
	}
}
