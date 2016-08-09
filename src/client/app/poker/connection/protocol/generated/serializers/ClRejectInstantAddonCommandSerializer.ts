
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClRejectInstantAddonCommand } from "../commands/ClRejectInstantAddonCommand";
import { ClRejectInstantAddonData } from "../data/ClRejectInstantAddonData";
import { ClRejectInstantAddonDataSerializer } from "./ClRejectInstantAddonDataSerializer";


export class ClRejectInstantAddonCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClRejectInstantAddonCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClRejectInstantAddonDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClRejectInstantAddonCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClRejectInstantAddonData();
            ClRejectInstantAddonDataSerializer.deserialize(buffer, command.data);
	}
}
