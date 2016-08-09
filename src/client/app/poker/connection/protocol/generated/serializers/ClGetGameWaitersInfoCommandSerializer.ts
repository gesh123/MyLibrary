
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetGameWaitersInfoCommand } from "../commands/ClGetGameWaitersInfoCommand";
import { ClGetGameWaitersInfoData } from "../data/ClGetGameWaitersInfoData";
import { ClGetGameWaitersInfoDataSerializer } from "./ClGetGameWaitersInfoDataSerializer";


export class ClGetGameWaitersInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetGameWaitersInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetGameWaitersInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetGameWaitersInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetGameWaitersInfoData();
            ClGetGameWaitersInfoDataSerializer.deserialize(buffer, command.data);
	}
}
