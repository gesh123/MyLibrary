
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvFinishedOnPlaceCommand } from "../commands/SrvFinishedOnPlaceCommand";
import { SrvFinishedOnPlaceData } from "../data/SrvFinishedOnPlaceData";
import { SrvFinishedOnPlaceDataSerializer } from "./SrvFinishedOnPlaceDataSerializer";


export class SrvFinishedOnPlaceCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvFinishedOnPlaceCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvFinishedOnPlaceDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvFinishedOnPlaceCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvFinishedOnPlaceData();
            SrvFinishedOnPlaceDataSerializer.deserialize(buffer, command.data);
	}
}
