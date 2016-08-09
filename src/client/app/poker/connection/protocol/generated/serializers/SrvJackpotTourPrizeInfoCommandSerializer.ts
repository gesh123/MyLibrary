
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvJackpotTourPrizeInfoCommand } from "../commands/SrvJackpotTourPrizeInfoCommand";
import { SrvJackpotTourPrizeInfoData } from "../data/SrvJackpotTourPrizeInfoData";
import { SrvJackpotTourPrizeInfoDataSerializer } from "./SrvJackpotTourPrizeInfoDataSerializer";


export class SrvJackpotTourPrizeInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourPrizeInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvJackpotTourPrizeInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourPrizeInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvJackpotTourPrizeInfoData();
            SrvJackpotTourPrizeInfoDataSerializer.deserialize(buffer, command.data);
	}
}
