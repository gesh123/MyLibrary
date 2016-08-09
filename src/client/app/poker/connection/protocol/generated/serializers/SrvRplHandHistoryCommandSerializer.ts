
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvRplHandHistoryCommand } from "../commands/SrvRplHandHistoryCommand";
import { SrvRplHandHistoryData } from "../data/SrvRplHandHistoryData";
import { SrvRplHandHistoryDataSerializer } from "./SrvRplHandHistoryDataSerializer";


export class SrvRplHandHistoryCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvRplHandHistoryCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvRplHandHistoryDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvRplHandHistoryCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvRplHandHistoryData();
            SrvRplHandHistoryDataSerializer.deserialize(buffer, command.data);
	}
}
