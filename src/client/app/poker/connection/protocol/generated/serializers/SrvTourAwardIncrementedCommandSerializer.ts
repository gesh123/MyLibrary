
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourAwardIncrementedCommand } from "../commands/SrvTourAwardIncrementedCommand";
import { SrvTourAwardIncrementedData } from "../data/SrvTourAwardIncrementedData";
import { SrvTourAwardIncrementedDataSerializer } from "./SrvTourAwardIncrementedDataSerializer";


export class SrvTourAwardIncrementedCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourAwardIncrementedCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourAwardIncrementedDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourAwardIncrementedCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourAwardIncrementedData();
            SrvTourAwardIncrementedDataSerializer.deserialize(buffer, command.data);
	}
}
