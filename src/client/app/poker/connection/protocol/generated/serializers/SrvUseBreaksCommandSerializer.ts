
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUseBreaksCommand } from "../commands/SrvUseBreaksCommand";
import { SrvUseBreaksData } from "../data/SrvUseBreaksData";
import { SrvUseBreaksDataSerializer } from "./SrvUseBreaksDataSerializer";


export class SrvUseBreaksCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUseBreaksCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUseBreaksDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUseBreaksCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUseBreaksData();
            SrvUseBreaksDataSerializer.deserialize(buffer, command.data);
	}
}
