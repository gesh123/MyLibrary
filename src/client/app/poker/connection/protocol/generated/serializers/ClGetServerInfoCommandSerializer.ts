
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetServerInfoCommand } from "../commands/ClGetServerInfoCommand";
import { ClGetServerInfoData } from "../data/ClGetServerInfoData";
import { ClGetServerInfoDataSerializer } from "./ClGetServerInfoDataSerializer";


export class ClGetServerInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetServerInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetServerInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetServerInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetServerInfoData();
            ClGetServerInfoDataSerializer.deserialize(buffer, command.data);
	}
}
