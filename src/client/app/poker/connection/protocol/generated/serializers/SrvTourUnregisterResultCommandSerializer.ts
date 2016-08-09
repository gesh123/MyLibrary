
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourUnregisterResultCommand } from "../commands/SrvTourUnregisterResultCommand";
import { SrvTourUnregisterResultData } from "../data/SrvTourUnregisterResultData";
import { SrvTourUnregisterResultDataSerializer } from "./SrvTourUnregisterResultDataSerializer";


export class SrvTourUnregisterResultCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourUnregisterResultCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourUnregisterResultDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourUnregisterResultCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourUnregisterResultData();
            SrvTourUnregisterResultDataSerializer.deserialize(buffer, command.data);
	}
}
