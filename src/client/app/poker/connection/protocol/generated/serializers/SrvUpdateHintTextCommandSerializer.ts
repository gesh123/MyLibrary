
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUpdateHintTextCommand } from "../commands/SrvUpdateHintTextCommand";
import { SrvUpdateHintTextData } from "../data/SrvUpdateHintTextData";
import { SrvUpdateHintTextDataSerializer } from "./SrvUpdateHintTextDataSerializer";


export class SrvUpdateHintTextCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUpdateHintTextCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUpdateHintTextDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUpdateHintTextCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUpdateHintTextData();
            SrvUpdateHintTextDataSerializer.deserialize(buffer, command.data);
	}
}
