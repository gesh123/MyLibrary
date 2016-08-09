
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvAddToWaitListOkCommand } from "../commands/SrvAddToWaitListOkCommand";
import { SrvAddToWaitListOkData } from "../data/SrvAddToWaitListOkData";
import { SrvAddToWaitListOkDataSerializer } from "./SrvAddToWaitListOkDataSerializer";


export class SrvAddToWaitListOkCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvAddToWaitListOkCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvAddToWaitListOkDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvAddToWaitListOkCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvAddToWaitListOkData();
            SrvAddToWaitListOkDataSerializer.deserialize(buffer, command.data);
	}
}
