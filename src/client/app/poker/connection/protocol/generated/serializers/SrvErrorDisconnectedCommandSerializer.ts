
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvErrorDisconnectedCommand } from "../commands/SrvErrorDisconnectedCommand";
import { SrvErrorDisconnectedData } from "../data/SrvErrorDisconnectedData";
import { SrvErrorDisconnectedDataSerializer } from "./SrvErrorDisconnectedDataSerializer";


export class SrvErrorDisconnectedCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvErrorDisconnectedCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvErrorDisconnectedDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvErrorDisconnectedCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvErrorDisconnectedData();
            SrvErrorDisconnectedDataSerializer.deserialize(buffer, command.data);
	}
}
