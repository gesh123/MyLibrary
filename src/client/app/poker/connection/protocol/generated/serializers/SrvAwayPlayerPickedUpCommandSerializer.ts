
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvAwayPlayerPickedUpCommand } from "../commands/SrvAwayPlayerPickedUpCommand";
import { SrvAwayPlayerPickedUpData } from "../data/SrvAwayPlayerPickedUpData";
import { SrvAwayPlayerPickedUpDataSerializer } from "./SrvAwayPlayerPickedUpDataSerializer";


export class SrvAwayPlayerPickedUpCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvAwayPlayerPickedUpCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvAwayPlayerPickedUpDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvAwayPlayerPickedUpCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvAwayPlayerPickedUpData();
            SrvAwayPlayerPickedUpDataSerializer.deserialize(buffer, command.data);
	}
}
