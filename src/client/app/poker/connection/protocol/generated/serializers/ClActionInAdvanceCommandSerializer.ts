
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClActionInAdvanceCommand } from "../commands/ClActionInAdvanceCommand";
import { ClActionInAdvanceData } from "../data/ClActionInAdvanceData";
import { ClActionInAdvanceDataSerializer } from "./ClActionInAdvanceDataSerializer";


export class ClActionInAdvanceCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClActionInAdvanceCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClActionInAdvanceDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClActionInAdvanceCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClActionInAdvanceData();
            ClActionInAdvanceDataSerializer.deserialize(buffer, command.data);
	}
}
