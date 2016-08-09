
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvJackpotTourCancelRegRequestCommand } from "../commands/SrvJackpotTourCancelRegRequestCommand";
import { SrvJackpotTourCancelRegRequestData } from "../data/SrvJackpotTourCancelRegRequestData";
import { SrvJackpotTourCancelRegRequestDataSerializer } from "./SrvJackpotTourCancelRegRequestDataSerializer";


export class SrvJackpotTourCancelRegRequestCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourCancelRegRequestCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvJackpotTourCancelRegRequestDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourCancelRegRequestCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvJackpotTourCancelRegRequestData();
            SrvJackpotTourCancelRegRequestDataSerializer.deserialize(buffer, command.data);
	}
}
