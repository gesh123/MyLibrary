
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClUnsubscribeFromSnGBeastJackpotCommand } from "../commands/ClUnsubscribeFromSnGBeastJackpotCommand";


export class ClUnsubscribeFromSnGBeastJackpotCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClUnsubscribeFromSnGBeastJackpotCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClUnsubscribeFromSnGBeastJackpotCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
	}
}
