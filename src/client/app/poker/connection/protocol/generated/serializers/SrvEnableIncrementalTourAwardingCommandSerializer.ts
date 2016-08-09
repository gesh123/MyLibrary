
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvEnableIncrementalTourAwardingCommand } from "../commands/SrvEnableIncrementalTourAwardingCommand";


export class SrvEnableIncrementalTourAwardingCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvEnableIncrementalTourAwardingCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvEnableIncrementalTourAwardingCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
	}
}
