
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvAddToWaitListErrorCommand } from "../commands/SrvAddToWaitListErrorCommand";
import { SrvAddToWaitListErrorData } from "../data/SrvAddToWaitListErrorData";
import { SrvAddToWaitListErrorDataSerializer } from "./SrvAddToWaitListErrorDataSerializer";


export class SrvAddToWaitListErrorCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvAddToWaitListErrorCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvAddToWaitListErrorDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvAddToWaitListErrorCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvAddToWaitListErrorData();
            SrvAddToWaitListErrorDataSerializer.deserialize(buffer, command.data);
	}
}
