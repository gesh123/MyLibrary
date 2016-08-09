
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourPlayersCountCommand } from "../commands/SrvTourPlayersCountCommand";
import { SrvTourPlayersCountData } from "../data/SrvTourPlayersCountData";
import { SrvTourPlayersCountDataSerializer } from "./SrvTourPlayersCountDataSerializer";


export class SrvTourPlayersCountCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourPlayersCountCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourPlayersCountDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourPlayersCountCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourPlayersCountData();
            SrvTourPlayersCountDataSerializer.deserialize(buffer, command.data);
	}
}
