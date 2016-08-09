
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUserTurnTimeoutCommand } from "../commands/SrvUserTurnTimeoutCommand";
import { SrvUserTurnTimeoutData } from "../data/SrvUserTurnTimeoutData";
import { SrvUserTurnTimeoutDataSerializer } from "./SrvUserTurnTimeoutDataSerializer";


export class SrvUserTurnTimeoutCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUserTurnTimeoutCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUserTurnTimeoutDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUserTurnTimeoutCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUserTurnTimeoutData();
            SrvUserTurnTimeoutDataSerializer.deserialize(buffer, command.data);
	}
}
