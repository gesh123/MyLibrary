
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourCountersInfoCommand } from "../commands/SrvTourCountersInfoCommand";
import { SrvTourCountersInfoData } from "../data/SrvTourCountersInfoData";
import { SrvTourCountersInfoDataSerializer } from "./SrvTourCountersInfoDataSerializer";


export class SrvTourCountersInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourCountersInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourCountersInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourCountersInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourCountersInfoData();
            SrvTourCountersInfoDataSerializer.deserialize(buffer, command.data);
	}
}
