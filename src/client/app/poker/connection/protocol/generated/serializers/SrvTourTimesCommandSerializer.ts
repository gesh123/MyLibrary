
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourTimesCommand } from "../commands/SrvTourTimesCommand";
import { SrvTourTimesData } from "../data/SrvTourTimesData";
import { SrvTourTimesDataSerializer } from "./SrvTourTimesDataSerializer";


export class SrvTourTimesCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourTimesCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourTimesDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourTimesCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourTimesData();
            SrvTourTimesDataSerializer.deserialize(buffer, command.data);
	}
}
