
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvRemoveFromWaitListErrorCommand } from "../commands/SrvRemoveFromWaitListErrorCommand";
import { SrvRemoveFromWaitListErrorData } from "../data/SrvRemoveFromWaitListErrorData";
import { SrvRemoveFromWaitListErrorDataSerializer } from "./SrvRemoveFromWaitListErrorDataSerializer";


export class SrvRemoveFromWaitListErrorCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvRemoveFromWaitListErrorCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvRemoveFromWaitListErrorDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvRemoveFromWaitListErrorCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvRemoveFromWaitListErrorData();
            SrvRemoveFromWaitListErrorDataSerializer.deserialize(buffer, command.data);
	}
}
