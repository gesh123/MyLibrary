
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvSSLDataCommand } from "../commands/SrvSSLDataCommand";
import { SrvSSLDataData } from "../data/SrvSSLDataData";
import { SrvSSLDataDataSerializer } from "./SrvSSLDataDataSerializer";


export class SrvSSLDataCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvSSLDataCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvSSLDataDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvSSLDataCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvSSLDataData();
            SrvSSLDataDataSerializer.deserialize(buffer, command.data);
	}
}
