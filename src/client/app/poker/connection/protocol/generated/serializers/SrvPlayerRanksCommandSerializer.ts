
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvPlayerRanksCommand } from "../commands/SrvPlayerRanksCommand";
import { SrvPlayerRanksData } from "../data/SrvPlayerRanksData";
import { SrvPlayerRanksDataSerializer } from "./SrvPlayerRanksDataSerializer";


export class SrvPlayerRanksCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvPlayerRanksCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvPlayerRanksDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvPlayerRanksCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvPlayerRanksData();
            SrvPlayerRanksDataSerializer.deserialize(buffer, command.data);
	}
}
