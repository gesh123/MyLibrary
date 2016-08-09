
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvNotifyForAddonRejectedByPlayerCommand } from "../commands/SrvNotifyForAddonRejectedByPlayerCommand";
import { SrvNotifyForAddonRejectedByPlayerData } from "../data/SrvNotifyForAddonRejectedByPlayerData";
import { SrvNotifyForAddonRejectedByPlayerDataSerializer } from "./SrvNotifyForAddonRejectedByPlayerDataSerializer";


export class SrvNotifyForAddonRejectedByPlayerCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvNotifyForAddonRejectedByPlayerCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvNotifyForAddonRejectedByPlayerDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvNotifyForAddonRejectedByPlayerCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvNotifyForAddonRejectedByPlayerData();
            SrvNotifyForAddonRejectedByPlayerDataSerializer.deserialize(buffer, command.data);
	}
}
