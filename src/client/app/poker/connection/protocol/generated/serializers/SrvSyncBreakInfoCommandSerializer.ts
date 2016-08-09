
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvSyncBreakInfoCommand } from "../commands/SrvSyncBreakInfoCommand";
import { SrvSyncBreakInfoData } from "../data/SrvSyncBreakInfoData";
import { SrvSyncBreakInfoDataSerializer } from "./SrvSyncBreakInfoDataSerializer";


export class SrvSyncBreakInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvSyncBreakInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvSyncBreakInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvSyncBreakInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvSyncBreakInfoData();
            SrvSyncBreakInfoDataSerializer.deserialize(buffer, command.data);
	}
}
