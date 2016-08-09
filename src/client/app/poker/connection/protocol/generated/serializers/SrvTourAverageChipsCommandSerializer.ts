
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourAverageChipsCommand } from "../commands/SrvTourAverageChipsCommand";
import { SrvTourAverageChipsData } from "../data/SrvTourAverageChipsData";
import { SrvTourAverageChipsDataSerializer } from "./SrvTourAverageChipsDataSerializer";


export class SrvTourAverageChipsCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourAverageChipsCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourAverageChipsDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourAverageChipsCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourAverageChipsData();
            SrvTourAverageChipsDataSerializer.deserialize(buffer, command.data);
	}
}
