
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourStartTimeChangeCommand } from "../commands/SrvTourStartTimeChangeCommand";
import { SrvTourStartTimeChangeData } from "../data/SrvTourStartTimeChangeData";
import { SrvTourStartTimeChangeDataSerializer } from "./SrvTourStartTimeChangeDataSerializer";


export class SrvTourStartTimeChangeCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourStartTimeChangeCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourStartTimeChangeDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourStartTimeChangeCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourStartTimeChangeData();
            SrvTourStartTimeChangeDataSerializer.deserialize(buffer, command.data);
	}
}
