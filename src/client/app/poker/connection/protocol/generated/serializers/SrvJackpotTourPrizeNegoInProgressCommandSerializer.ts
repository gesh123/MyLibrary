
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvJackpotTourPrizeNegoInProgressCommand } from "../commands/SrvJackpotTourPrizeNegoInProgressCommand";
import { SrvJackpotTourPrizeNegoInProgressData } from "../data/SrvJackpotTourPrizeNegoInProgressData";
import { SrvJackpotTourPrizeNegoInProgressDataSerializer } from "./SrvJackpotTourPrizeNegoInProgressDataSerializer";


export class SrvJackpotTourPrizeNegoInProgressCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourPrizeNegoInProgressCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvJackpotTourPrizeNegoInProgressDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourPrizeNegoInProgressCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvJackpotTourPrizeNegoInProgressData();
            SrvJackpotTourPrizeNegoInProgressDataSerializer.deserialize(buffer, command.data);
	}
}
