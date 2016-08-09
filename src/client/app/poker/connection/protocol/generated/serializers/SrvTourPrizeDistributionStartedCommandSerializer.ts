
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourPrizeDistributionStartedCommand } from "../commands/SrvTourPrizeDistributionStartedCommand";


export class SrvTourPrizeDistributionStartedCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourPrizeDistributionStartedCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourPrizeDistributionStartedCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
	}
}
