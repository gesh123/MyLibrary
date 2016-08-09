
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClConnectGameCommand } from "../commands/ClConnectGameCommand";
import { ClConnectGameData } from "../data/ClConnectGameData";
import { ClConnectGameDataSerializer } from "./ClConnectGameDataSerializer";


export class ClConnectGameCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClConnectGameCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClConnectGameDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClConnectGameCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClConnectGameData();
            ClConnectGameDataSerializer.deserialize(buffer, command.data);
	}
}
