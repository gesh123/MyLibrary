
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvLevelSwitchCommand } from "../commands/SrvLevelSwitchCommand";
import { SrvLevelSwitchData } from "../data/SrvLevelSwitchData";
import { SrvLevelSwitchDataSerializer } from "./SrvLevelSwitchDataSerializer";


export class SrvLevelSwitchCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvLevelSwitchCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvLevelSwitchDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvLevelSwitchCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvLevelSwitchData();
            SrvLevelSwitchDataSerializer.deserialize(buffer, command.data);
	}
}
