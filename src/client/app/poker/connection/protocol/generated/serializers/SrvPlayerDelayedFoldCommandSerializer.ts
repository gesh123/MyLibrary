
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvPlayerDelayedFoldCommand } from "../commands/SrvPlayerDelayedFoldCommand";
import { SrvPlayerDelayedFoldData } from "../data/SrvPlayerDelayedFoldData";
import { SrvPlayerDelayedFoldDataSerializer } from "./SrvPlayerDelayedFoldDataSerializer";


export class SrvPlayerDelayedFoldCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvPlayerDelayedFoldCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvPlayerDelayedFoldDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvPlayerDelayedFoldCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvPlayerDelayedFoldData();
            SrvPlayerDelayedFoldDataSerializer.deserialize(buffer, command.data);
	}
}
