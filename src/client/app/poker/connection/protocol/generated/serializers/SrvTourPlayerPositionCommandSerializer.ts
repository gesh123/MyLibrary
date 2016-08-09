
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourPlayerPositionCommand } from "../commands/SrvTourPlayerPositionCommand";
import { SrvTourPlayerPositionData } from "../data/SrvTourPlayerPositionData";
import { SrvTourPlayerPositionDataSerializer } from "./SrvTourPlayerPositionDataSerializer";


export class SrvTourPlayerPositionCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourPlayerPositionCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourPlayerPositionDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourPlayerPositionCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourPlayerPositionData();
            SrvTourPlayerPositionDataSerializer.deserialize(buffer, command.data);
	}
}
