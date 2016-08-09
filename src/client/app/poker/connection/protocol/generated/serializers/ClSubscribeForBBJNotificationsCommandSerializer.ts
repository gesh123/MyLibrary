
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClSubscribeForBBJNotificationsCommand } from "../commands/ClSubscribeForBBJNotificationsCommand";


export class ClSubscribeForBBJNotificationsCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClSubscribeForBBJNotificationsCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClSubscribeForBBJNotificationsCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
	}
}
