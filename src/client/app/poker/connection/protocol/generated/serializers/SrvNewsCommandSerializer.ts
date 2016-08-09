
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvNewsCommand } from "../commands/SrvNewsCommand";
import { SrvNewsData } from "../data/SrvNewsData";
import { SrvNewsDataSerializer } from "./SrvNewsDataSerializer";


export class SrvNewsCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvNewsCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvNewsDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvNewsCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvNewsData();
            SrvNewsDataSerializer.deserialize(buffer, command.data);
	}
}
