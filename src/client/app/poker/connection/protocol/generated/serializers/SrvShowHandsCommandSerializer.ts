
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvShowHandsCommand } from "../commands/SrvShowHandsCommand";
import { SrvShowHandsData } from "../data/SrvShowHandsData";
import { SrvShowHandsDataSerializer } from "./SrvShowHandsDataSerializer";


export class SrvShowHandsCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvShowHandsCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvShowHandsDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvShowHandsCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvShowHandsData();
            SrvShowHandsDataSerializer.deserialize(buffer, command.data);
	}
}
