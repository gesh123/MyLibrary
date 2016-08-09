
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvEndJackpotTourPrizeNegoCommand } from "../commands/SrvEndJackpotTourPrizeNegoCommand";
import { SrvEndJackpotTourPrizeNegoData } from "../data/SrvEndJackpotTourPrizeNegoData";
import { SrvEndJackpotTourPrizeNegoDataSerializer } from "./SrvEndJackpotTourPrizeNegoDataSerializer";


export class SrvEndJackpotTourPrizeNegoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvEndJackpotTourPrizeNegoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvEndJackpotTourPrizeNegoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvEndJackpotTourPrizeNegoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvEndJackpotTourPrizeNegoData();
            SrvEndJackpotTourPrizeNegoDataSerializer.deserialize(buffer, command.data);
	}
}
