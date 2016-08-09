
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClSubscribeForSnGBeastJackpotCommand } from "../commands/ClSubscribeForSnGBeastJackpotCommand";


export class ClSubscribeForSnGBeastJackpotCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClSubscribeForSnGBeastJackpotCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClSubscribeForSnGBeastJackpotCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
	}
}
