
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvDrawCardsCommand } from "../commands/SrvDrawCardsCommand";
import { SrvDrawCardsData } from "../data/SrvDrawCardsData";
import { SrvDrawCardsDataSerializer } from "./SrvDrawCardsDataSerializer";


export class SrvDrawCardsCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvDrawCardsCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvDrawCardsDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvDrawCardsCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvDrawCardsData();
            SrvDrawCardsDataSerializer.deserialize(buffer, command.data);
	}
}
