
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClSetAutoRebuysCommand } from "../commands/ClSetAutoRebuysCommand";
import { ClSetAutoRebuysData } from "../data/ClSetAutoRebuysData";
import { ClSetAutoRebuysDataSerializer } from "./ClSetAutoRebuysDataSerializer";


export class ClSetAutoRebuysCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClSetAutoRebuysCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClSetAutoRebuysDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClSetAutoRebuysCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClSetAutoRebuysData();
            ClSetAutoRebuysDataSerializer.deserialize(buffer, command.data);
	}
}
