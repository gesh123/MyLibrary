
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClPingCommand } from "../commands/ClPingCommand";
import { ClPingData } from "../data/ClPingData";
import { ClPingDataSerializer } from "./ClPingDataSerializer";


export class ClPingCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClPingCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClPingDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClPingCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClPingData();
            ClPingDataSerializer.deserialize(buffer, command.data);
	}
}
