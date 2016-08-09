
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClPeekTournamentsInfoCommand } from "../commands/ClPeekTournamentsInfoCommand";
import { ClPeekTournamentsInfoData } from "../data/ClPeekTournamentsInfoData";
import { ClPeekTournamentsInfoDataSerializer } from "./ClPeekTournamentsInfoDataSerializer";


export class ClPeekTournamentsInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClPeekTournamentsInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClPeekTournamentsInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClPeekTournamentsInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClPeekTournamentsInfoData();
            ClPeekTournamentsInfoDataSerializer.deserialize(buffer, command.data);
	}
}
