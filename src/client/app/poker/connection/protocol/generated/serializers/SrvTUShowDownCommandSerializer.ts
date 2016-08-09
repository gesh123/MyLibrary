
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTUShowDownCommand } from "../commands/SrvTUShowDownCommand";
import { SrvTUShowDownData } from "../data/SrvTUShowDownData";
import { SrvTUShowDownDataSerializer } from "./SrvTUShowDownDataSerializer";


export class SrvTUShowDownCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTUShowDownCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTUShowDownDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTUShowDownCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTUShowDownData();
            SrvTUShowDownDataSerializer.deserialize(buffer, command.data);
	}
}
