
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClLogoutCommand } from "../commands/ClLogoutCommand";


export class ClLogoutCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClLogoutCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClLogoutCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
	}
}
