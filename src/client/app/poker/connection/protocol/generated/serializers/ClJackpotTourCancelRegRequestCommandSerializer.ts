
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClJackpotTourCancelRegRequestCommand } from "../commands/ClJackpotTourCancelRegRequestCommand";
import { ClJackpotTourCancelRegRequestData } from "../data/ClJackpotTourCancelRegRequestData";
import { ClJackpotTourCancelRegRequestDataSerializer } from "./ClJackpotTourCancelRegRequestDataSerializer";


export class ClJackpotTourCancelRegRequestCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClJackpotTourCancelRegRequestCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClJackpotTourCancelRegRequestDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClJackpotTourCancelRegRequestCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClJackpotTourCancelRegRequestData();
            ClJackpotTourCancelRegRequestDataSerializer.deserialize(buffer, command.data);
	}
}
