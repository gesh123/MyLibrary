
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClSubscribeForPlayerTournamentViewCommand } from "../commands/ClSubscribeForPlayerTournamentViewCommand";
import { ClSubscribeForPlayerTournamentViewData } from "../data/ClSubscribeForPlayerTournamentViewData";
import { ClSubscribeForPlayerTournamentViewDataSerializer } from "./ClSubscribeForPlayerTournamentViewDataSerializer";


export class ClSubscribeForPlayerTournamentViewCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClSubscribeForPlayerTournamentViewCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClSubscribeForPlayerTournamentViewDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClSubscribeForPlayerTournamentViewCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClSubscribeForPlayerTournamentViewData();
            ClSubscribeForPlayerTournamentViewDataSerializer.deserialize(buffer, command.data);
	}
}
