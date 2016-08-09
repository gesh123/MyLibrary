
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvNewPlayerInAddonGracePeriodCommand } from "../commands/SrvNewPlayerInAddonGracePeriodCommand";
import { SrvNewPlayerInAddonGracePeriodData } from "../data/SrvNewPlayerInAddonGracePeriodData";
import { SrvNewPlayerInAddonGracePeriodDataSerializer } from "./SrvNewPlayerInAddonGracePeriodDataSerializer";


export class SrvNewPlayerInAddonGracePeriodCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvNewPlayerInAddonGracePeriodCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvNewPlayerInAddonGracePeriodDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvNewPlayerInAddonGracePeriodCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvNewPlayerInAddonGracePeriodData();
            SrvNewPlayerInAddonGracePeriodDataSerializer.deserialize(buffer, command.data);
	}
}
