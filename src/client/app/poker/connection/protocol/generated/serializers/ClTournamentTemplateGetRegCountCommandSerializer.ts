
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClTournamentTemplateGetRegCountCommand } from "../commands/ClTournamentTemplateGetRegCountCommand";
import { ClTournamentTemplateGetRegCountData } from "../data/ClTournamentTemplateGetRegCountData";
import { ClTournamentTemplateGetRegCountDataSerializer } from "./ClTournamentTemplateGetRegCountDataSerializer";


export class ClTournamentTemplateGetRegCountCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClTournamentTemplateGetRegCountCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClTournamentTemplateGetRegCountDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClTournamentTemplateGetRegCountCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClTournamentTemplateGetRegCountData();
            ClTournamentTemplateGetRegCountDataSerializer.deserialize(buffer, command.data);
	}
}
