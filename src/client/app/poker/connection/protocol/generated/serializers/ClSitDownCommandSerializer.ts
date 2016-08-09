
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClSitDownCommand } from "../commands/ClSitDownCommand";
import { ClSitDownData } from "../data/ClSitDownData";
import { ClSitDownDataSerializer } from "./ClSitDownDataSerializer";


export class ClSitDownCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClSitDownCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClSitDownDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClSitDownCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClSitDownData();
            ClSitDownDataSerializer.deserialize(buffer, command.data);
	}
}
