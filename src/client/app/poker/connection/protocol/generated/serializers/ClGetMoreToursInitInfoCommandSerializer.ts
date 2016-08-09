
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetMoreToursInitInfoCommand } from "../commands/ClGetMoreToursInitInfoCommand";
import { ClGetMoreToursInitInfoData } from "../data/ClGetMoreToursInitInfoData";
import { ClGetMoreToursInitInfoDataSerializer } from "./ClGetMoreToursInitInfoDataSerializer";


export class ClGetMoreToursInitInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetMoreToursInitInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetMoreToursInitInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetMoreToursInitInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetMoreToursInitInfoData();
            ClGetMoreToursInitInfoDataSerializer.deserialize(buffer, command.data);
	}
}
