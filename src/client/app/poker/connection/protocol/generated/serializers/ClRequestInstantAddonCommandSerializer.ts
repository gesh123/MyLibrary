
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClRequestInstantAddonCommand } from "../commands/ClRequestInstantAddonCommand";
import { ClRequestInstantAddonData } from "../data/ClRequestInstantAddonData";
import { ClRequestInstantAddonDataSerializer } from "./ClRequestInstantAddonDataSerializer";


export class ClRequestInstantAddonCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClRequestInstantAddonCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClRequestInstantAddonDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClRequestInstantAddonCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClRequestInstantAddonData();
            ClRequestInstantAddonDataSerializer.deserialize(buffer, command.data);
	}
}
