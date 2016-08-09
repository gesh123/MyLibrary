
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvPlayerParticipationsCommand } from "../commands/SrvPlayerParticipationsCommand";
import { SrvPlayerParticipationsData } from "../data/SrvPlayerParticipationsData";
import { SrvPlayerParticipationsDataSerializer } from "./SrvPlayerParticipationsDataSerializer";


export class SrvPlayerParticipationsCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvPlayerParticipationsCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvPlayerParticipationsDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvPlayerParticipationsCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvPlayerParticipationsData();
            SrvPlayerParticipationsDataSerializer.deserialize(buffer, command.data);
	}
}
