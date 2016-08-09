
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourLevelCommand } from "../commands/SrvTourLevelCommand";
import { SrvTourLevelData } from "../data/SrvTourLevelData";
import { SrvTourLevelDataSerializer } from "./SrvTourLevelDataSerializer";


export class SrvTourLevelCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourLevelCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourLevelDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourLevelCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourLevelData();
            SrvTourLevelDataSerializer.deserialize(buffer, command.data);
	}
}
