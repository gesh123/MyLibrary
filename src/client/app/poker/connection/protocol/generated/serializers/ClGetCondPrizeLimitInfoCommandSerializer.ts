
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetCondPrizeLimitInfoCommand } from "../commands/ClGetCondPrizeLimitInfoCommand";
import { ClGetCondPrizeLimitInfoData } from "../data/ClGetCondPrizeLimitInfoData";
import { ClGetCondPrizeLimitInfoDataSerializer } from "./ClGetCondPrizeLimitInfoDataSerializer";


export class ClGetCondPrizeLimitInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetCondPrizeLimitInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetCondPrizeLimitInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetCondPrizeLimitInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetCondPrizeLimitInfoData();
            ClGetCondPrizeLimitInfoDataSerializer.deserialize(buffer, command.data);
	}
}
