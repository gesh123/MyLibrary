
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourSmallestStackCommand } from "../commands/SrvTourSmallestStackCommand";
import { SrvTourSmallestStackData } from "../data/SrvTourSmallestStackData";
import { SrvTourSmallestStackDataSerializer } from "./SrvTourSmallestStackDataSerializer";


export class SrvTourSmallestStackCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourSmallestStackCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourSmallestStackDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourSmallestStackCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourSmallestStackData();
            SrvTourSmallestStackDataSerializer.deserialize(buffer, command.data);
	}
}
