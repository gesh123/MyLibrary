
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTournamentsInfoCommand } from "../commands/SrvTournamentsInfoCommand";
import { SrvTournamentsInfoData } from "../data/SrvTournamentsInfoData";
import { SrvTournamentsInfoDataSerializer } from "./SrvTournamentsInfoDataSerializer";


export class SrvTournamentsInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTournamentsInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTournamentsInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTournamentsInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTournamentsInfoData();
            SrvTournamentsInfoDataSerializer.deserialize(buffer, command.data);
	}
}
