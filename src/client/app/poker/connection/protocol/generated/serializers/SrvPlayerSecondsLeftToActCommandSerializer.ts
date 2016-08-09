
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvPlayerSecondsLeftToActCommand } from "../commands/SrvPlayerSecondsLeftToActCommand";
import { SrvPlayerSecondsLeftToActData } from "../data/SrvPlayerSecondsLeftToActData";
import { SrvPlayerSecondsLeftToActDataSerializer } from "./SrvPlayerSecondsLeftToActDataSerializer";


export class SrvPlayerSecondsLeftToActCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvPlayerSecondsLeftToActCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvPlayerSecondsLeftToActDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvPlayerSecondsLeftToActCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvPlayerSecondsLeftToActData();
            SrvPlayerSecondsLeftToActDataSerializer.deserialize(buffer, command.data);
	}
}
