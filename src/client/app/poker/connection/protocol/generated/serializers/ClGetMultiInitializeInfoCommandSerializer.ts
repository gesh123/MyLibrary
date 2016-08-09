
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetMultiInitializeInfoCommand } from "../commands/ClGetMultiInitializeInfoCommand";
import { ClGetMultiInitializeInfoData } from "../data/ClGetMultiInitializeInfoData";
import { ClGetMultiInitializeInfoDataSerializer } from "./ClGetMultiInitializeInfoDataSerializer";


export class ClGetMultiInitializeInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetMultiInitializeInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetMultiInitializeInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetMultiInitializeInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetMultiInitializeInfoData();
            ClGetMultiInitializeInfoDataSerializer.deserialize(buffer, command.data);
	}
}
