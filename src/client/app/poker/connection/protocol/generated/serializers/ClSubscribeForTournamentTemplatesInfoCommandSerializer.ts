
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClSubscribeForTournamentTemplatesInfoCommand } from "../commands/ClSubscribeForTournamentTemplatesInfoCommand";
import { ClSubscribeForTournamentTemplatesInfoData } from "../data/ClSubscribeForTournamentTemplatesInfoData";
import { ClSubscribeForTournamentTemplatesInfoDataSerializer } from "./ClSubscribeForTournamentTemplatesInfoDataSerializer";


export class ClSubscribeForTournamentTemplatesInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClSubscribeForTournamentTemplatesInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClSubscribeForTournamentTemplatesInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClSubscribeForTournamentTemplatesInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClSubscribeForTournamentTemplatesInfoData();
            ClSubscribeForTournamentTemplatesInfoDataSerializer.deserialize(buffer, command.data);
	}
}
