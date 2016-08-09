
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClSendUserPassCommand } from "../commands/ClSendUserPassCommand";
import { ClSendUserPassData } from "../data/ClSendUserPassData";
import { ClSendUserPassDataSerializer } from "./ClSendUserPassDataSerializer";


export class ClSendUserPassCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClSendUserPassCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClSendUserPassDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClSendUserPassCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClSendUserPassData();
            ClSendUserPassDataSerializer.deserialize(buffer, command.data);
	}
}
