
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvPingCommand } from "../commands/SrvPingCommand";
import { SrvPingData } from "../data/SrvPingData";
import { SrvPingDataSerializer } from "./SrvPingDataSerializer";


export class SrvPingCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvPingCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvPingDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvPingCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvPingData();
            SrvPingDataSerializer.deserialize(buffer, command.data);
	}
}
