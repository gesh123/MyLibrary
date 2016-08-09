
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClUnsubscribeFromTableCommand } from "../commands/ClUnsubscribeFromTableCommand";
import { ClUnsubscribeFromTableData } from "../data/ClUnsubscribeFromTableData";
import { ClUnsubscribeFromTableDataSerializer } from "./ClUnsubscribeFromTableDataSerializer";


export class ClUnsubscribeFromTableCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClUnsubscribeFromTableCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClUnsubscribeFromTableDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClUnsubscribeFromTableCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClUnsubscribeFromTableData();
            ClUnsubscribeFromTableDataSerializer.deserialize(buffer, command.data);
	}
}
