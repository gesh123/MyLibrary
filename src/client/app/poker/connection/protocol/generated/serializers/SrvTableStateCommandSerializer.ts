
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTableStateCommand } from "../commands/SrvTableStateCommand";
import { SrvTableStateData } from "../data/SrvTableStateData";
import { SrvTableStateDataSerializer } from "./SrvTableStateDataSerializer";


export class SrvTableStateCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTableStateCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTableStateDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTableStateCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTableStateData();
            SrvTableStateDataSerializer.deserialize(buffer, command.data);
	}
}
