
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetHandHistoryCommand } from "../commands/ClGetHandHistoryCommand";
import { ClGetHandHistoryData } from "../data/ClGetHandHistoryData";
import { ClGetHandHistoryDataSerializer } from "./ClGetHandHistoryDataSerializer";


export class ClGetHandHistoryCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetHandHistoryCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetHandHistoryDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetHandHistoryCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetHandHistoryData();
            ClGetHandHistoryDataSerializer.deserialize(buffer, command.data);
	}
}
