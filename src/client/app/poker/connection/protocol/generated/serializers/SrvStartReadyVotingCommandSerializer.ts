
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvStartReadyVotingCommand } from "../commands/SrvStartReadyVotingCommand";
import { SrvStartReadyVotingData } from "../data/SrvStartReadyVotingData";
import { SrvStartReadyVotingDataSerializer } from "./SrvStartReadyVotingDataSerializer";


export class SrvStartReadyVotingCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvStartReadyVotingCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvStartReadyVotingDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvStartReadyVotingCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvStartReadyVotingData();
            SrvStartReadyVotingDataSerializer.deserialize(buffer, command.data);
	}
}
