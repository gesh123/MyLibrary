
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUpdateTablesCommand } from "../commands/SrvUpdateTablesCommand";
import { SrvUpdateTablesData } from "../data/SrvUpdateTablesData";
import { SrvUpdateTablesDataSerializer } from "./SrvUpdateTablesDataSerializer";


export class SrvUpdateTablesCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUpdateTablesCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUpdateTablesDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUpdateTablesCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUpdateTablesData();
            SrvUpdateTablesDataSerializer.deserialize(buffer, command.data);
	}
}
