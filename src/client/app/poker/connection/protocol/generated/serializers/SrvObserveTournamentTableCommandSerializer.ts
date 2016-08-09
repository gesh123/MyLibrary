
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvObserveTournamentTableCommand } from "../commands/SrvObserveTournamentTableCommand";
import { SrvObserveTournamentTableData } from "../data/SrvObserveTournamentTableData";
import { SrvObserveTournamentTableDataSerializer } from "./SrvObserveTournamentTableDataSerializer";


export class SrvObserveTournamentTableCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvObserveTournamentTableCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvObserveTournamentTableDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvObserveTournamentTableCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvObserveTournamentTableData();
            SrvObserveTournamentTableDataSerializer.deserialize(buffer, command.data);
	}
}
