
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvJackpotTourRegRequestCommand } from "../commands/SrvJackpotTourRegRequestCommand";
import { SrvJackpotTourRegRequestData } from "../data/SrvJackpotTourRegRequestData";
import { SrvJackpotTourRegRequestDataSerializer } from "./SrvJackpotTourRegRequestDataSerializer";


export class SrvJackpotTourRegRequestCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourRegRequestCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvJackpotTourRegRequestDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourRegRequestCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvJackpotTourRegRequestData();
            SrvJackpotTourRegRequestDataSerializer.deserialize(buffer, command.data);
	}
}
