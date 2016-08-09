
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUpdateRebuysCountCommand } from "../commands/SrvUpdateRebuysCountCommand";
import { SrvUpdateRebuysCountData } from "../data/SrvUpdateRebuysCountData";
import { SrvUpdateRebuysCountDataSerializer } from "./SrvUpdateRebuysCountDataSerializer";


export class SrvUpdateRebuysCountCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUpdateRebuysCountCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUpdateRebuysCountDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUpdateRebuysCountCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUpdateRebuysCountData();
            SrvUpdateRebuysCountDataSerializer.deserialize(buffer, command.data);
	}
}
