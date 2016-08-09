
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClMoveMe2MyTableCommand } from "../commands/ClMoveMe2MyTableCommand";
import { ClMoveMe2MyTableData } from "../data/ClMoveMe2MyTableData";
import { ClMoveMe2MyTableDataSerializer } from "./ClMoveMe2MyTableDataSerializer";


export class ClMoveMe2MyTableCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClMoveMe2MyTableCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClMoveMe2MyTableDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClMoveMe2MyTableCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClMoveMe2MyTableData();
            ClMoveMe2MyTableDataSerializer.deserialize(buffer, command.data);
	}
}
