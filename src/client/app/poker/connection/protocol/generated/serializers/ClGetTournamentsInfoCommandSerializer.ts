
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetTournamentsInfoCommand } from "../commands/ClGetTournamentsInfoCommand";
import { ClGetTournamentsInfoData } from "../data/ClGetTournamentsInfoData";
import { ClGetTournamentsInfoDataSerializer } from "./ClGetTournamentsInfoDataSerializer";


export class ClGetTournamentsInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetTournamentsInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetTournamentsInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetTournamentsInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetTournamentsInfoData();
            ClGetTournamentsInfoDataSerializer.deserialize(buffer, command.data);
	}
}
