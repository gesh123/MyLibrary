
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClDrawCardsCommand } from "../commands/ClDrawCardsCommand";
import { ClDrawCardsData } from "../data/ClDrawCardsData";
import { ClDrawCardsDataSerializer } from "./ClDrawCardsDataSerializer";


export class ClDrawCardsCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClDrawCardsCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClDrawCardsDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClDrawCardsCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClDrawCardsData();
            ClDrawCardsDataSerializer.deserialize(buffer, command.data);
	}
}
