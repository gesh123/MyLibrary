
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvJackpotTourPlayerRegisteredCommand } from "../commands/SrvJackpotTourPlayerRegisteredCommand";
import { SrvJackpotTourPlayerRegisteredData } from "../data/SrvJackpotTourPlayerRegisteredData";
import { SrvJackpotTourPlayerRegisteredDataSerializer } from "./SrvJackpotTourPlayerRegisteredDataSerializer";


export class SrvJackpotTourPlayerRegisteredCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourPlayerRegisteredCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvJackpotTourPlayerRegisteredDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourPlayerRegisteredCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvJackpotTourPlayerRegisteredData();
            SrvJackpotTourPlayerRegisteredDataSerializer.deserialize(buffer, command.data);
	}
}
