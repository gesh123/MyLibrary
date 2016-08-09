
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvJackpotTourBuyInInfoCommand } from "../commands/SrvJackpotTourBuyInInfoCommand";
import { SrvJackpotTourBuyInInfoData } from "../data/SrvJackpotTourBuyInInfoData";
import { SrvJackpotTourBuyInInfoDataSerializer } from "./SrvJackpotTourBuyInInfoDataSerializer";


export class SrvJackpotTourBuyInInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourBuyInInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvJackpotTourBuyInInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourBuyInInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvJackpotTourBuyInInfoData();
            SrvJackpotTourBuyInInfoDataSerializer.deserialize(buffer, command.data);
	}
}
