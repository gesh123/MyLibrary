
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvBetRoundStartCommand } from "../commands/SrvBetRoundStartCommand";
import { SrvBetRoundStartData } from "../data/SrvBetRoundStartData";
import { SrvBetRoundStartDataSerializer } from "./SrvBetRoundStartDataSerializer";


export class SrvBetRoundStartCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvBetRoundStartCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvBetRoundStartDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvBetRoundStartCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvBetRoundStartData();
            SrvBetRoundStartDataSerializer.deserialize(buffer, command.data);
	}
}
