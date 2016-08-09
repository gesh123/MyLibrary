
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvHandWinnersCommand } from "../commands/SrvHandWinnersCommand";
import { SrvHandWinnersData } from "../data/SrvHandWinnersData";
import { SrvHandWinnersDataSerializer } from "./SrvHandWinnersDataSerializer";


export class SrvHandWinnersCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvHandWinnersCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvHandWinnersDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvHandWinnersCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvHandWinnersData();
            SrvHandWinnersDataSerializer.deserialize(buffer, command.data);
	}
}
