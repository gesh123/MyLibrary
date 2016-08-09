
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvStartTourRematchVotingCommand } from "../commands/SrvStartTourRematchVotingCommand";
import { SrvStartTourRematchVotingData } from "../data/SrvStartTourRematchVotingData";
import { SrvStartTourRematchVotingDataSerializer } from "./SrvStartTourRematchVotingDataSerializer";


export class SrvStartTourRematchVotingCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvStartTourRematchVotingCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvStartTourRematchVotingDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvStartTourRematchVotingCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvStartTourRematchVotingData();
            SrvStartTourRematchVotingDataSerializer.deserialize(buffer, command.data);
	}
}
