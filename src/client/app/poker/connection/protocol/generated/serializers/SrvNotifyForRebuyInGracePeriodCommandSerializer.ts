
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvNotifyForRebuyInGracePeriodCommand } from "../commands/SrvNotifyForRebuyInGracePeriodCommand";
import { SrvNotifyForRebuyInGracePeriodData } from "../data/SrvNotifyForRebuyInGracePeriodData";
import { SrvNotifyForRebuyInGracePeriodDataSerializer } from "./SrvNotifyForRebuyInGracePeriodDataSerializer";


export class SrvNotifyForRebuyInGracePeriodCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvNotifyForRebuyInGracePeriodCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvNotifyForRebuyInGracePeriodDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvNotifyForRebuyInGracePeriodCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvNotifyForRebuyInGracePeriodData();
            SrvNotifyForRebuyInGracePeriodDataSerializer.deserialize(buffer, command.data);
	}
}
