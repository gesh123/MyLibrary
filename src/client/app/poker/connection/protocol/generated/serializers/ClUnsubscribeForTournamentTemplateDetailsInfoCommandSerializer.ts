
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClUnsubscribeForTournamentTemplateDetailsInfoCommand } from "../commands/ClUnsubscribeForTournamentTemplateDetailsInfoCommand";
import { ClUnsubscribeForTournamentTemplateDetailsInfoData } from "../data/ClUnsubscribeForTournamentTemplateDetailsInfoData";
import { ClUnsubscribeForTournamentTemplateDetailsInfoDataSerializer } from "./ClUnsubscribeForTournamentTemplateDetailsInfoDataSerializer";


export class ClUnsubscribeForTournamentTemplateDetailsInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClUnsubscribeForTournamentTemplateDetailsInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClUnsubscribeForTournamentTemplateDetailsInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClUnsubscribeForTournamentTemplateDetailsInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClUnsubscribeForTournamentTemplateDetailsInfoData();
            ClUnsubscribeForTournamentTemplateDetailsInfoDataSerializer.deserialize(buffer, command.data);
	}
}
