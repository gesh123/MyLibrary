
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetJackpotTourBuyInInfoCommand } from "../commands/ClGetJackpotTourBuyInInfoCommand";
import { ClGetJackpotTourBuyInInfoData } from "../data/ClGetJackpotTourBuyInInfoData";
import { ClGetJackpotTourBuyInInfoDataSerializer } from "./ClGetJackpotTourBuyInInfoDataSerializer";


export class ClGetJackpotTourBuyInInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetJackpotTourBuyInInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetJackpotTourBuyInInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetJackpotTourBuyInInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetJackpotTourBuyInInfoData();
            ClGetJackpotTourBuyInInfoDataSerializer.deserialize(buffer, command.data);
	}
}
