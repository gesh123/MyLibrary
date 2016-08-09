
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvJackpotTourStartTimeCommand } from "../commands/SrvJackpotTourStartTimeCommand";
import { SrvJackpotTourStartTimeData } from "../data/SrvJackpotTourStartTimeData";
import { SrvJackpotTourStartTimeDataSerializer } from "./SrvJackpotTourStartTimeDataSerializer";


export class SrvJackpotTourStartTimeCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourStartTimeCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvJackpotTourStartTimeDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourStartTimeCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvJackpotTourStartTimeData();
            SrvJackpotTourStartTimeDataSerializer.deserialize(buffer, command.data);
	}
}
