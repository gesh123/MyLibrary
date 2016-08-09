
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourPlayerFinishedCommand } from "../commands/SrvTourPlayerFinishedCommand";
import { SrvTourPlayerFinishedData } from "../data/SrvTourPlayerFinishedData";
import { SrvTourPlayerFinishedDataSerializer } from "./SrvTourPlayerFinishedDataSerializer";


export class SrvTourPlayerFinishedCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourPlayerFinishedCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourPlayerFinishedDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourPlayerFinishedCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourPlayerFinishedData();
            SrvTourPlayerFinishedDataSerializer.deserialize(buffer, command.data);
	}
}
