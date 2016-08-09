
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvLateRegLevelCommand } from "../commands/SrvLateRegLevelCommand";
import { SrvLateRegLevelData } from "../data/SrvLateRegLevelData";
import { SrvLateRegLevelDataSerializer } from "./SrvLateRegLevelDataSerializer";


export class SrvLateRegLevelCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvLateRegLevelCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvLateRegLevelDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvLateRegLevelCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvLateRegLevelData();
            SrvLateRegLevelDataSerializer.deserialize(buffer, command.data);
	}
}
