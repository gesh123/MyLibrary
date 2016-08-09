
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClUnsubscribeForTournamentTemplatesInfoCommand } from "../commands/ClUnsubscribeForTournamentTemplatesInfoCommand";


export class ClUnsubscribeForTournamentTemplatesInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClUnsubscribeForTournamentTemplatesInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClUnsubscribeForTournamentTemplatesInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
	}
}
