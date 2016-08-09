
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvStartAddonGracePeriodCommand } from "../commands/SrvStartAddonGracePeriodCommand";
import { SrvStartAddonGracePeriodData } from "../data/SrvStartAddonGracePeriodData";
import { SrvStartAddonGracePeriodDataSerializer } from "./SrvStartAddonGracePeriodDataSerializer";


export class SrvStartAddonGracePeriodCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvStartAddonGracePeriodCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvStartAddonGracePeriodDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvStartAddonGracePeriodCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvStartAddonGracePeriodData();
            SrvStartAddonGracePeriodDataSerializer.deserialize(buffer, command.data);
	}
}
