
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvCardDeckInUseCommand } from "../commands/SrvCardDeckInUseCommand";
import { SrvCardDeckInUseData } from "../data/SrvCardDeckInUseData";
import { SrvCardDeckInUseDataSerializer } from "./SrvCardDeckInUseDataSerializer";


export class SrvCardDeckInUseCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvCardDeckInUseCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvCardDeckInUseDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvCardDeckInUseCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvCardDeckInUseData();
            SrvCardDeckInUseDataSerializer.deserialize(buffer, command.data);
	}
}
