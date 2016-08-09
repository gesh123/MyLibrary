
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvBetRoundCompleteCommand } from "../commands/SrvBetRoundCompleteCommand";
import { SrvBetRoundCompleteData } from "../data/SrvBetRoundCompleteData";
import { SrvBetRoundCompleteDataSerializer } from "./SrvBetRoundCompleteDataSerializer";


export class SrvBetRoundCompleteCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvBetRoundCompleteCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvBetRoundCompleteDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvBetRoundCompleteCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvBetRoundCompleteData();
            SrvBetRoundCompleteDataSerializer.deserialize(buffer, command.data);
	}
}
