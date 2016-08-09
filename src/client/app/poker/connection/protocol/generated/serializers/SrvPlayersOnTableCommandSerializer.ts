
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvPlayersOnTableCommand } from "../commands/SrvPlayersOnTableCommand";
import { SrvPlayersOnTableData } from "../data/SrvPlayersOnTableData";
import { SrvPlayersOnTableDataSerializer } from "./SrvPlayersOnTableDataSerializer";


export class SrvPlayersOnTableCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvPlayersOnTableCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvPlayersOnTableDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvPlayersOnTableCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvPlayersOnTableData();
            SrvPlayersOnTableDataSerializer.deserialize(buffer, command.data);
	}
}
