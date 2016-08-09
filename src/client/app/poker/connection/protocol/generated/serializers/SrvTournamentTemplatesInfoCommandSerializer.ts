
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTournamentTemplatesInfoCommand } from "../commands/SrvTournamentTemplatesInfoCommand";
import { SrvTournamentTemplatesInfoData } from "../data/SrvTournamentTemplatesInfoData";
import { SrvTournamentTemplatesInfoDataSerializer } from "./SrvTournamentTemplatesInfoDataSerializer";


export class SrvTournamentTemplatesInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTournamentTemplatesInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTournamentTemplatesInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTournamentTemplatesInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTournamentTemplatesInfoData();
            SrvTournamentTemplatesInfoDataSerializer.deserialize(buffer, command.data);
	}
}
