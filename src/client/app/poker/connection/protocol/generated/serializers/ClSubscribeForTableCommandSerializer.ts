
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClSubscribeForTableCommand } from "../commands/ClSubscribeForTableCommand";
import { ClSubscribeForTableData } from "../data/ClSubscribeForTableData";
import { ClSubscribeForTableDataSerializer } from "./ClSubscribeForTableDataSerializer";


export class ClSubscribeForTableCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClSubscribeForTableCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClSubscribeForTableDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClSubscribeForTableCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClSubscribeForTableData();
            ClSubscribeForTableDataSerializer.deserialize(buffer, command.data);
	}
}
