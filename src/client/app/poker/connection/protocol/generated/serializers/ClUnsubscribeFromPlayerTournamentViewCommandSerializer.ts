
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClUnsubscribeFromPlayerTournamentViewCommand } from "../commands/ClUnsubscribeFromPlayerTournamentViewCommand";
import { ClUnsubscribeFromPlayerTournamentViewData } from "../data/ClUnsubscribeFromPlayerTournamentViewData";
import { ClUnsubscribeFromPlayerTournamentViewDataSerializer } from "./ClUnsubscribeFromPlayerTournamentViewDataSerializer";


export class ClUnsubscribeFromPlayerTournamentViewCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClUnsubscribeFromPlayerTournamentViewCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClUnsubscribeFromPlayerTournamentViewDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClUnsubscribeFromPlayerTournamentViewCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClUnsubscribeFromPlayerTournamentViewData();
            ClUnsubscribeFromPlayerTournamentViewDataSerializer.deserialize(buffer, command.data);
	}
}
