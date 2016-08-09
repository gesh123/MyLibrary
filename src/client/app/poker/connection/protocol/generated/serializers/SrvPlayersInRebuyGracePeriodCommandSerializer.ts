
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvPlayersInRebuyGracePeriodCommand } from "../commands/SrvPlayersInRebuyGracePeriodCommand";
import { SrvPlayersInRebuyGracePeriodData } from "../data/SrvPlayersInRebuyGracePeriodData";
import { SrvPlayersInRebuyGracePeriodDataSerializer } from "./SrvPlayersInRebuyGracePeriodDataSerializer";


export class SrvPlayersInRebuyGracePeriodCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvPlayersInRebuyGracePeriodCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvPlayersInRebuyGracePeriodDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvPlayersInRebuyGracePeriodCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvPlayersInRebuyGracePeriodData();
            SrvPlayersInRebuyGracePeriodDataSerializer.deserialize(buffer, command.data);
	}
}
