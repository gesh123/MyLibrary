
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvGameStartDelayedForRebuysCommand } from "../commands/SrvGameStartDelayedForRebuysCommand";
import { SrvGameStartDelayedForRebuysData } from "../data/SrvGameStartDelayedForRebuysData";
import { SrvGameStartDelayedForRebuysDataSerializer } from "./SrvGameStartDelayedForRebuysDataSerializer";


export class SrvGameStartDelayedForRebuysCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvGameStartDelayedForRebuysCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvGameStartDelayedForRebuysDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvGameStartDelayedForRebuysCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvGameStartDelayedForRebuysData();
            SrvGameStartDelayedForRebuysDataSerializer.deserialize(buffer, command.data);
	}
}
