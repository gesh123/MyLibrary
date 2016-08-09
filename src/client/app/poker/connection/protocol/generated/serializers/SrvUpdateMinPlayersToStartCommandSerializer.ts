
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUpdateMinPlayersToStartCommand } from "../commands/SrvUpdateMinPlayersToStartCommand";
import { SrvUpdateMinPlayersToStartData } from "../data/SrvUpdateMinPlayersToStartData";
import { SrvUpdateMinPlayersToStartDataSerializer } from "./SrvUpdateMinPlayersToStartDataSerializer";


export class SrvUpdateMinPlayersToStartCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUpdateMinPlayersToStartCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUpdateMinPlayersToStartDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUpdateMinPlayersToStartCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUpdateMinPlayersToStartData();
            SrvUpdateMinPlayersToStartDataSerializer.deserialize(buffer, command.data);
	}
}
