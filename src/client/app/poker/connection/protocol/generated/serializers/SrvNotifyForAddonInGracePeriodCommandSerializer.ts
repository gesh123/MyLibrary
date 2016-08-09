
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvNotifyForAddonInGracePeriodCommand } from "../commands/SrvNotifyForAddonInGracePeriodCommand";
import { SrvNotifyForAddonInGracePeriodData } from "../data/SrvNotifyForAddonInGracePeriodData";
import { SrvNotifyForAddonInGracePeriodDataSerializer } from "./SrvNotifyForAddonInGracePeriodDataSerializer";


export class SrvNotifyForAddonInGracePeriodCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvNotifyForAddonInGracePeriodCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvNotifyForAddonInGracePeriodDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvNotifyForAddonInGracePeriodCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvNotifyForAddonInGracePeriodData();
            SrvNotifyForAddonInGracePeriodDataSerializer.deserialize(buffer, command.data);
	}
}
