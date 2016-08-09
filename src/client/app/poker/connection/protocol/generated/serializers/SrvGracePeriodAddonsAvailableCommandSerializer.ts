
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvGracePeriodAddonsAvailableCommand } from "../commands/SrvGracePeriodAddonsAvailableCommand";


export class SrvGracePeriodAddonsAvailableCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvGracePeriodAddonsAvailableCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvGracePeriodAddonsAvailableCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
	}
}
