
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClSetAutoAddonCommand } from "../commands/ClSetAutoAddonCommand";
import { ClSetAutoAddonData } from "../data/ClSetAutoAddonData";
import { ClSetAutoAddonDataSerializer } from "./ClSetAutoAddonDataSerializer";


export class ClSetAutoAddonCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClSetAutoAddonCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClSetAutoAddonDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClSetAutoAddonCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClSetAutoAddonData();
            ClSetAutoAddonDataSerializer.deserialize(buffer, command.data);
	}
}
