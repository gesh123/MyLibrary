
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvGameStartDelayedForAddonsCommand } from "../commands/SrvGameStartDelayedForAddonsCommand";
import { SrvGameStartDelayedForAddonsData } from "../data/SrvGameStartDelayedForAddonsData";
import { SrvGameStartDelayedForAddonsDataSerializer } from "./SrvGameStartDelayedForAddonsDataSerializer";


export class SrvGameStartDelayedForAddonsCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvGameStartDelayedForAddonsCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvGameStartDelayedForAddonsDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvGameStartDelayedForAddonsCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvGameStartDelayedForAddonsData();
            SrvGameStartDelayedForAddonsDataSerializer.deserialize(buffer, command.data);
	}
}
