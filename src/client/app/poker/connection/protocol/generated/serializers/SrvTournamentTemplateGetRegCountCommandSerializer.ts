
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTournamentTemplateGetRegCountCommand } from "../commands/SrvTournamentTemplateGetRegCountCommand";
import { SrvTournamentTemplateGetRegCountData } from "../data/SrvTournamentTemplateGetRegCountData";
import { SrvTournamentTemplateGetRegCountDataSerializer } from "./SrvTournamentTemplateGetRegCountDataSerializer";


export class SrvTournamentTemplateGetRegCountCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTournamentTemplateGetRegCountCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTournamentTemplateGetRegCountDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTournamentTemplateGetRegCountCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTournamentTemplateGetRegCountData();
            SrvTournamentTemplateGetRegCountDataSerializer.deserialize(buffer, command.data);
	}
}
