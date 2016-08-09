
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvBackOnSeatOkCommand } from "../commands/SrvBackOnSeatOkCommand";
import { SrvBackOnSeatOkData } from "../data/SrvBackOnSeatOkData";
import { SrvBackOnSeatOkDataSerializer } from "./SrvBackOnSeatOkDataSerializer";


export class SrvBackOnSeatOkCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvBackOnSeatOkCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvBackOnSeatOkDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvBackOnSeatOkCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvBackOnSeatOkData();
            SrvBackOnSeatOkDataSerializer.deserialize(buffer, command.data);
	}
}
