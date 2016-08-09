
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvJackpotTourForceCancelRegRequestCommand } from "../commands/SrvJackpotTourForceCancelRegRequestCommand";
import { SrvJackpotTourForceCancelRegRequestData } from "../data/SrvJackpotTourForceCancelRegRequestData";
import { SrvJackpotTourForceCancelRegRequestDataSerializer } from "./SrvJackpotTourForceCancelRegRequestDataSerializer";


export class SrvJackpotTourForceCancelRegRequestCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourForceCancelRegRequestCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvJackpotTourForceCancelRegRequestDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourForceCancelRegRequestCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvJackpotTourForceCancelRegRequestData();
            SrvJackpotTourForceCancelRegRequestDataSerializer.deserialize(buffer, command.data);
	}
}
