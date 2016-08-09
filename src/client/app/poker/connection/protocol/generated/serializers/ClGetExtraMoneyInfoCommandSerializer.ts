
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetExtraMoneyInfoCommand } from "../commands/ClGetExtraMoneyInfoCommand";
import { ClGetExtraMoneyInfoData } from "../data/ClGetExtraMoneyInfoData";
import { ClGetExtraMoneyInfoDataSerializer } from "./ClGetExtraMoneyInfoDataSerializer";


export class ClGetExtraMoneyInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetExtraMoneyInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetExtraMoneyInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetExtraMoneyInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetExtraMoneyInfoData();
            ClGetExtraMoneyInfoDataSerializer.deserialize(buffer, command.data);
	}
}
