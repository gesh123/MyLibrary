
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvPlayersInAddonGracePeriodCommand } from "../commands/SrvPlayersInAddonGracePeriodCommand";
import { SrvPlayersInAddonGracePeriodData } from "../data/SrvPlayersInAddonGracePeriodData";
import { SrvPlayersInAddonGracePeriodDataSerializer } from "./SrvPlayersInAddonGracePeriodDataSerializer";


export class SrvPlayersInAddonGracePeriodCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvPlayersInAddonGracePeriodCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvPlayersInAddonGracePeriodDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvPlayersInAddonGracePeriodCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvPlayersInAddonGracePeriodData();
            SrvPlayersInAddonGracePeriodDataSerializer.deserialize(buffer, command.data);
	}
}
