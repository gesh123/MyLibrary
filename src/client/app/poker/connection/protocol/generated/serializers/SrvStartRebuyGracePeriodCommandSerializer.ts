
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvStartRebuyGracePeriodCommand } from "../commands/SrvStartRebuyGracePeriodCommand";
import { SrvStartRebuyGracePeriodData } from "../data/SrvStartRebuyGracePeriodData";
import { SrvStartRebuyGracePeriodDataSerializer } from "./SrvStartRebuyGracePeriodDataSerializer";


export class SrvStartRebuyGracePeriodCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvStartRebuyGracePeriodCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvStartRebuyGracePeriodDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvStartRebuyGracePeriodCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvStartRebuyGracePeriodData();
            SrvStartRebuyGracePeriodDataSerializer.deserialize(buffer, command.data);
	}
}
