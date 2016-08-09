
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvJackpotTourForceCancelRegRequestExCommand } from "../commands/SrvJackpotTourForceCancelRegRequestExCommand";
import { SrvJackpotTourForceCancelRegRequestExData } from "../data/SrvJackpotTourForceCancelRegRequestExData";
import { SrvJackpotTourForceCancelRegRequestExDataSerializer } from "./SrvJackpotTourForceCancelRegRequestExDataSerializer";


export class SrvJackpotTourForceCancelRegRequestExCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourForceCancelRegRequestExCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvJackpotTourForceCancelRegRequestExDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourForceCancelRegRequestExCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvJackpotTourForceCancelRegRequestExData();
            SrvJackpotTourForceCancelRegRequestExDataSerializer.deserialize(buffer, command.data);
	}
}
