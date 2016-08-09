
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClObserveTournamentTemplateTableCommand } from "../commands/ClObserveTournamentTemplateTableCommand";
import { ClObserveTournamentTemplateTableData } from "../data/ClObserveTournamentTemplateTableData";
import { ClObserveTournamentTemplateTableDataSerializer } from "./ClObserveTournamentTemplateTableDataSerializer";


export class ClObserveTournamentTemplateTableCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClObserveTournamentTemplateTableCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClObserveTournamentTemplateTableDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClObserveTournamentTemplateTableCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClObserveTournamentTemplateTableData();
            ClObserveTournamentTemplateTableDataSerializer.deserialize(buffer, command.data);
	}
}
