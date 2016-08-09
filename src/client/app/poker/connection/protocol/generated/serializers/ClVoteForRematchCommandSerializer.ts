
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClVoteForRematchCommand } from "../commands/ClVoteForRematchCommand";
import { ClVoteForRematchData } from "../data/ClVoteForRematchData";
import { ClVoteForRematchDataSerializer } from "./ClVoteForRematchDataSerializer";


export class ClVoteForRematchCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClVoteForRematchCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClVoteForRematchDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClVoteForRematchCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClVoteForRematchData();
            ClVoteForRematchDataSerializer.deserialize(buffer, command.data);
	}
}
