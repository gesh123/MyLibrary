
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvPlayerTournamentViewCommand } from "../commands/SrvPlayerTournamentViewCommand";
import { SrvPlayerTournamentViewData } from "../data/SrvPlayerTournamentViewData";
import { SrvPlayerTournamentViewDataSerializer } from "./SrvPlayerTournamentViewDataSerializer";


export class SrvPlayerTournamentViewCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvPlayerTournamentViewCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvPlayerTournamentViewDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvPlayerTournamentViewCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvPlayerTournamentViewData();
            SrvPlayerTournamentViewDataSerializer.deserialize(buffer, command.data);
	}
}
