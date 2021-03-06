
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClSSLDataCommand } from "../commands/ClSSLDataCommand";
import { ClSSLDataData } from "../data/ClSSLDataData";
import { ClSSLDataDataSerializer } from "./ClSSLDataDataSerializer";


export class ClSSLDataCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClSSLDataCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClSSLDataDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClSSLDataCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClSSLDataData();
            ClSSLDataDataSerializer.deserialize(buffer, command.data);
	}
}
