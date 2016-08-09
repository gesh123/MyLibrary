
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvJackpotTourPrizeDistributionInfoCommand } from "../commands/SrvJackpotTourPrizeDistributionInfoCommand";
import { SrvJackpotTourPrizeDistributionInfoData } from "../data/SrvJackpotTourPrizeDistributionInfoData";
import { SrvJackpotTourPrizeDistributionInfoDataSerializer } from "./SrvJackpotTourPrizeDistributionInfoDataSerializer";


export class SrvJackpotTourPrizeDistributionInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourPrizeDistributionInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvJackpotTourPrizeDistributionInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourPrizeDistributionInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvJackpotTourPrizeDistributionInfoData();
            SrvJackpotTourPrizeDistributionInfoDataSerializer.deserialize(buffer, command.data);
	}
}
