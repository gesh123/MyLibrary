
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvServerCountersInfoCommand } from "../commands/SrvServerCountersInfoCommand";
import { SrvServerCountersInfoData } from "../data/SrvServerCountersInfoData";
import { SrvServerCountersInfoDataSerializer } from "./SrvServerCountersInfoDataSerializer";


export class SrvServerCountersInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvServerCountersInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvServerCountersInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvServerCountersInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvServerCountersInfoData();
            SrvServerCountersInfoDataSerializer.deserialize(buffer, command.data);
	}
}
