
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClJackpotTourRegRequestCommand } from "../commands/ClJackpotTourRegRequestCommand";
import { ClJackpotTourRegRequestData } from "../data/ClJackpotTourRegRequestData";
import { ClJackpotTourRegRequestDataSerializer } from "./ClJackpotTourRegRequestDataSerializer";


export class ClJackpotTourRegRequestCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClJackpotTourRegRequestCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClJackpotTourRegRequestDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClJackpotTourRegRequestCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClJackpotTourRegRequestData();
            ClJackpotTourRegRequestDataSerializer.deserialize(buffer, command.data);
	}
}
