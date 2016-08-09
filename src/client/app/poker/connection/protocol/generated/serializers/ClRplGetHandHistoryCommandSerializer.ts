
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClRplGetHandHistoryCommand } from "../commands/ClRplGetHandHistoryCommand";
import { ClRplGetHandHistoryData } from "../data/ClRplGetHandHistoryData";
import { ClRplGetHandHistoryDataSerializer } from "./ClRplGetHandHistoryDataSerializer";


export class ClRplGetHandHistoryCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClRplGetHandHistoryCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClRplGetHandHistoryDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClRplGetHandHistoryCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClRplGetHandHistoryData();
            ClRplGetHandHistoryDataSerializer.deserialize(buffer, command.data);
	}
}
