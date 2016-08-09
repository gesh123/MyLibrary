
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourReenterResultCommand } from "../commands/SrvTourReenterResultCommand";
import { SrvTourReenterResultData } from "../data/SrvTourReenterResultData";
import { SrvTourReenterResultDataSerializer } from "./SrvTourReenterResultDataSerializer";


export class SrvTourReenterResultCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourReenterResultCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourReenterResultDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourReenterResultCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourReenterResultData();
            SrvTourReenterResultDataSerializer.deserialize(buffer, command.data);
	}
}
