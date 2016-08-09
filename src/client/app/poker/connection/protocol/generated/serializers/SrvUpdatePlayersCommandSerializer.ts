
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUpdatePlayersCommand } from "../commands/SrvUpdatePlayersCommand";
import { SrvUpdatePlayersData } from "../data/SrvUpdatePlayersData";
import { SrvUpdatePlayersDataSerializer } from "./SrvUpdatePlayersDataSerializer";


export class SrvUpdatePlayersCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUpdatePlayersCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUpdatePlayersDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUpdatePlayersCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUpdatePlayersData();
            SrvUpdatePlayersDataSerializer.deserialize(buffer, command.data);
	}
}
