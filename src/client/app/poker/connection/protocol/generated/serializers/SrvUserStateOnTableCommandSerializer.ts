
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUserStateOnTableCommand } from "../commands/SrvUserStateOnTableCommand";
import { SrvUserStateOnTableData } from "../data/SrvUserStateOnTableData";
import { SrvUserStateOnTableDataSerializer } from "./SrvUserStateOnTableDataSerializer";


export class SrvUserStateOnTableCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUserStateOnTableCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUserStateOnTableDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUserStateOnTableCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUserStateOnTableData();
            SrvUserStateOnTableDataSerializer.deserialize(buffer, command.data);
	}
}
