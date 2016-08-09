
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClBackCommand } from "../commands/ClBackCommand";


export class ClBackCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClBackCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClBackCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
	}
}
