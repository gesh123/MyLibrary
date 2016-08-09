
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvVoteForTourRematchFailedCommand } from "../commands/SrvVoteForTourRematchFailedCommand";
import { SrvVoteForTourRematchFailedData } from "../data/SrvVoteForTourRematchFailedData";
import { SrvVoteForTourRematchFailedDataSerializer } from "./SrvVoteForTourRematchFailedDataSerializer";


export class SrvVoteForTourRematchFailedCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvVoteForTourRematchFailedCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvVoteForTourRematchFailedDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvVoteForTourRematchFailedCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvVoteForTourRematchFailedData();
            SrvVoteForTourRematchFailedDataSerializer.deserialize(buffer, command.data);
	}
}
