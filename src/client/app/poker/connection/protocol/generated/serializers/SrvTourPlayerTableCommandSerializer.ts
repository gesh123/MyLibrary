
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourPlayerTableCommand } from "../commands/SrvTourPlayerTableCommand";
import { SrvTourPlayerTableData } from "../data/SrvTourPlayerTableData";
import { SrvTourPlayerTableDataSerializer } from "./SrvTourPlayerTableDataSerializer";


export class SrvTourPlayerTableCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourPlayerTableCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourPlayerTableDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourPlayerTableCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourPlayerTableData();
            SrvTourPlayerTableDataSerializer.deserialize(buffer, command.data);
	}
}
