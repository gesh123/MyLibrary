
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClVoteCommand } from "../commands/ClVoteCommand";
import { ClVoteData } from "../data/ClVoteData";
import { ClVoteDataSerializer } from "./ClVoteDataSerializer";


export class ClVoteCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClVoteCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClVoteDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClVoteCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClVoteData();
            ClVoteDataSerializer.deserialize(buffer, command.data);
	}
}
