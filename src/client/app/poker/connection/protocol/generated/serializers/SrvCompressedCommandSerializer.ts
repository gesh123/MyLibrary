
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvCompressedCommand } from "../commands/SrvCompressedCommand";
import { SrvCompressedData } from "../data/SrvCompressedData";
import { SrvCompressedDataSerializer } from "./SrvCompressedDataSerializer";


export class SrvCompressedCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvCompressedCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvCompressedDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvCompressedCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvCompressedData();
            SrvCompressedDataSerializer.deserialize(buffer, command.data);
	}
}
