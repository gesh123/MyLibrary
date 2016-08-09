
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvWaitListCommand } from "../commands/SrvWaitListCommand";
import { SrvWaitListData } from "../data/SrvWaitListData";
import { SrvWaitListDataSerializer } from "./SrvWaitListDataSerializer";


export class SrvWaitListCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvWaitListCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvWaitListDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvWaitListCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvWaitListData();
            SrvWaitListDataSerializer.deserialize(buffer, command.data);
	}
}
