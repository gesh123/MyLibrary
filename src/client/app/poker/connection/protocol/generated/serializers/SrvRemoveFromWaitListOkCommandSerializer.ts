
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvRemoveFromWaitListOkCommand } from "../commands/SrvRemoveFromWaitListOkCommand";
import { SrvRemoveFromWaitListOkData } from "../data/SrvRemoveFromWaitListOkData";
import { SrvRemoveFromWaitListOkDataSerializer } from "./SrvRemoveFromWaitListOkDataSerializer";


export class SrvRemoveFromWaitListOkCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvRemoveFromWaitListOkCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvRemoveFromWaitListOkDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvRemoveFromWaitListOkCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvRemoveFromWaitListOkData();
            SrvRemoveFromWaitListOkDataSerializer.deserialize(buffer, command.data);
	}
}
