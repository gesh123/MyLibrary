
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvStartJackpotTourPrizeNegoCommand } from "../commands/SrvStartJackpotTourPrizeNegoCommand";
import { SrvStartJackpotTourPrizeNegoData } from "../data/SrvStartJackpotTourPrizeNegoData";
import { SrvStartJackpotTourPrizeNegoDataSerializer } from "./SrvStartJackpotTourPrizeNegoDataSerializer";


export class SrvStartJackpotTourPrizeNegoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvStartJackpotTourPrizeNegoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvStartJackpotTourPrizeNegoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvStartJackpotTourPrizeNegoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvStartJackpotTourPrizeNegoData();
            SrvStartJackpotTourPrizeNegoDataSerializer.deserialize(buffer, command.data);
	}
}
