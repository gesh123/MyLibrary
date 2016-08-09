
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvDeadBetCommand } from "../commands/SrvDeadBetCommand";
import { SrvDeadBetData } from "../data/SrvDeadBetData";
import { SrvDeadBetDataSerializer } from "./SrvDeadBetDataSerializer";


export class SrvDeadBetCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvDeadBetCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvDeadBetDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvDeadBetCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvDeadBetData();
            SrvDeadBetDataSerializer.deserialize(buffer, command.data);
	}
}
