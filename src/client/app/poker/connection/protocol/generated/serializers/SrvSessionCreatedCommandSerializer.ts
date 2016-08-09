
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvSessionCreatedCommand } from "../commands/SrvSessionCreatedCommand";
import { SrvSessionCreatedData } from "../data/SrvSessionCreatedData";
import { SrvSessionCreatedDataSerializer } from "./SrvSessionCreatedDataSerializer";


export class SrvSessionCreatedCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvSessionCreatedCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvSessionCreatedDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvSessionCreatedCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvSessionCreatedData();
            SrvSessionCreatedDataSerializer.deserialize(buffer, command.data);
	}
}
