
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourMoveToTableCommand } from "../commands/SrvTourMoveToTableCommand";
import { SrvTourMoveToTableData } from "../data/SrvTourMoveToTableData";
import { SrvTourMoveToTableDataSerializer } from "./SrvTourMoveToTableDataSerializer";


export class SrvTourMoveToTableCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourMoveToTableCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourMoveToTableDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourMoveToTableCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourMoveToTableData();
            SrvTourMoveToTableDataSerializer.deserialize(buffer, command.data);
	}
}
