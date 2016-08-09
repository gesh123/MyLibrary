
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvDisableIncrementalTourAwardingCommand } from "../commands/SrvDisableIncrementalTourAwardingCommand";


export class SrvDisableIncrementalTourAwardingCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvDisableIncrementalTourAwardingCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvDisableIncrementalTourAwardingCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
	}
}
