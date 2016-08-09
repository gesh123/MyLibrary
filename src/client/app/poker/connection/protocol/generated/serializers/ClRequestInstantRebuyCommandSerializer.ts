
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClRequestInstantRebuyCommand } from "../commands/ClRequestInstantRebuyCommand";
import { ClRequestInstantRebuyData } from "../data/ClRequestInstantRebuyData";
import { ClRequestInstantRebuyDataSerializer } from "./ClRequestInstantRebuyDataSerializer";


export class ClRequestInstantRebuyCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClRequestInstantRebuyCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClRequestInstantRebuyDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClRequestInstantRebuyCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClRequestInstantRebuyData();
            ClRequestInstantRebuyDataSerializer.deserialize(buffer, command.data);
	}
}
