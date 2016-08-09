
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourPrizePoolCommand } from "../commands/SrvTourPrizePoolCommand";
import { SrvTourPrizePoolData } from "../data/SrvTourPrizePoolData";
import { SrvTourPrizePoolDataSerializer } from "./SrvTourPrizePoolDataSerializer";


export class SrvTourPrizePoolCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourPrizePoolCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourPrizePoolDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourPrizePoolCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourPrizePoolData();
            SrvTourPrizePoolDataSerializer.deserialize(buffer, command.data);
	}
}
