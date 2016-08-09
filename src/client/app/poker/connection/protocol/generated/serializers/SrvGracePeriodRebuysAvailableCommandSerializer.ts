
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvGracePeriodRebuysAvailableCommand } from "../commands/SrvGracePeriodRebuysAvailableCommand";


export class SrvGracePeriodRebuysAvailableCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvGracePeriodRebuysAvailableCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvGracePeriodRebuysAvailableCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
	}
}
