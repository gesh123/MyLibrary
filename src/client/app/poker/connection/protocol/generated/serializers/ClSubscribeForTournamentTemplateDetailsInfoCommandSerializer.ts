
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClSubscribeForTournamentTemplateDetailsInfoCommand } from "../commands/ClSubscribeForTournamentTemplateDetailsInfoCommand";
import { ClSubscribeForTournamentTemplateDetailsInfoData } from "../data/ClSubscribeForTournamentTemplateDetailsInfoData";
import { ClSubscribeForTournamentTemplateDetailsInfoDataSerializer } from "./ClSubscribeForTournamentTemplateDetailsInfoDataSerializer";


export class ClSubscribeForTournamentTemplateDetailsInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClSubscribeForTournamentTemplateDetailsInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClSubscribeForTournamentTemplateDetailsInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClSubscribeForTournamentTemplateDetailsInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClSubscribeForTournamentTemplateDetailsInfoData();
            ClSubscribeForTournamentTemplateDetailsInfoDataSerializer.deserialize(buffer, command.data);
	}
}
