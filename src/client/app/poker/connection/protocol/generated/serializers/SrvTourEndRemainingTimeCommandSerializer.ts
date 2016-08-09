
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourEndRemainingTimeCommand } from "../commands/SrvTourEndRemainingTimeCommand";
import { SrvTourEndRemainingTimeData } from "../data/SrvTourEndRemainingTimeData";
import { SrvTourEndRemainingTimeDataSerializer } from "./SrvTourEndRemainingTimeDataSerializer";


export class SrvTourEndRemainingTimeCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourEndRemainingTimeCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourEndRemainingTimeDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourEndRemainingTimeCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourEndRemainingTimeData();
            SrvTourEndRemainingTimeDataSerializer.deserialize(buffer, command.data);
	}
}
