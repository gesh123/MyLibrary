
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvNewTourTablesCommand } from "../commands/SrvNewTourTablesCommand";
import { SrvNewTourTablesData } from "../data/SrvNewTourTablesData";
import { SrvNewTourTablesDataSerializer } from "./SrvNewTourTablesDataSerializer";


export class SrvNewTourTablesCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvNewTourTablesCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvNewTourTablesDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvNewTourTablesCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvNewTourTablesData();
            SrvNewTourTablesDataSerializer.deserialize(buffer, command.data);
	}
}
