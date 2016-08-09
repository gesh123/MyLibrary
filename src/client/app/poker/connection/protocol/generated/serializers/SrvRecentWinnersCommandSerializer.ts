
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvRecentWinnersCommand } from "../commands/SrvRecentWinnersCommand";
import { SrvRecentWinnersData } from "../data/SrvRecentWinnersData";
import { SrvRecentWinnersDataSerializer } from "./SrvRecentWinnersDataSerializer";


export class SrvRecentWinnersCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvRecentWinnersCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvRecentWinnersDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvRecentWinnersCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvRecentWinnersData();
            SrvRecentWinnersDataSerializer.deserialize(buffer, command.data);
	}
}
