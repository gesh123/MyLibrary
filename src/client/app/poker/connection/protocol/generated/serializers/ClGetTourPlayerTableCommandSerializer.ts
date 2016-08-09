
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetTourPlayerTableCommand } from "../commands/ClGetTourPlayerTableCommand";
import { ClGetTourPlayerTableData } from "../data/ClGetTourPlayerTableData";
import { ClGetTourPlayerTableDataSerializer } from "./ClGetTourPlayerTableDataSerializer";


export class ClGetTourPlayerTableCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetTourPlayerTableCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetTourPlayerTableDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetTourPlayerTableCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetTourPlayerTableData();
            ClGetTourPlayerTableDataSerializer.deserialize(buffer, command.data);
	}
}
