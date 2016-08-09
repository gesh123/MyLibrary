
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetUpdateInfoCommand } from "../commands/ClGetUpdateInfoCommand";
import { ClGetUpdateInfoData } from "../data/ClGetUpdateInfoData";
import { ClGetUpdateInfoDataSerializer } from "./ClGetUpdateInfoDataSerializer";


export class ClGetUpdateInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetUpdateInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetUpdateInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetUpdateInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetUpdateInfoData();
            ClGetUpdateInfoDataSerializer.deserialize(buffer, command.data);
	}
}
