
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvPlayerVoteForRematchCommand } from "../commands/SrvPlayerVoteForRematchCommand";
import { SrvPlayerVoteForRematchData } from "../data/SrvPlayerVoteForRematchData";
import { SrvPlayerVoteForRematchDataSerializer } from "./SrvPlayerVoteForRematchDataSerializer";


export class SrvPlayerVoteForRematchCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvPlayerVoteForRematchCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvPlayerVoteForRematchDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvPlayerVoteForRematchCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvPlayerVoteForRematchData();
            SrvPlayerVoteForRematchDataSerializer.deserialize(buffer, command.data);
	}
}
