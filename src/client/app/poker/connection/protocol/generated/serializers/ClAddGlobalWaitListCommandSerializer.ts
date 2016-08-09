
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClAddGlobalWaitListCommand } from "../commands/ClAddGlobalWaitListCommand";
import { ClAddGlobalWaitListData } from "../data/ClAddGlobalWaitListData";
import { ClAddGlobalWaitListDataSerializer } from "./ClAddGlobalWaitListDataSerializer";


export class ClAddGlobalWaitListCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClAddGlobalWaitListCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClAddGlobalWaitListDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClAddGlobalWaitListCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClAddGlobalWaitListData();
            ClAddGlobalWaitListDataSerializer.deserialize(buffer, command.data);
	}
}
