
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetGameInfoCommand } from "../commands/ClGetGameInfoCommand";
import { ClGetGameInfoData } from "../data/ClGetGameInfoData";
import { ClGetGameInfoDataSerializer } from "./ClGetGameInfoDataSerializer";


export class ClGetGameInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetGameInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetGameInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetGameInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetGameInfoData();
            ClGetGameInfoDataSerializer.deserialize(buffer, command.data);
	}
}
