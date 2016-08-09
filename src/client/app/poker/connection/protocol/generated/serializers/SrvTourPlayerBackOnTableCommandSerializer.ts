
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourPlayerBackOnTableCommand } from "../commands/SrvTourPlayerBackOnTableCommand";
import { SrvTourPlayerBackOnTableData } from "../data/SrvTourPlayerBackOnTableData";
import { SrvTourPlayerBackOnTableDataSerializer } from "./SrvTourPlayerBackOnTableDataSerializer";


export class SrvTourPlayerBackOnTableCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourPlayerBackOnTableCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourPlayerBackOnTableDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourPlayerBackOnTableCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourPlayerBackOnTableData();
            SrvTourPlayerBackOnTableDataSerializer.deserialize(buffer, command.data);
	}
}
