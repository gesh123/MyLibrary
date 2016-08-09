
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUserTurnExtraTimeoutCommand } from "../commands/SrvUserTurnExtraTimeoutCommand";
import { SrvUserTurnExtraTimeoutData } from "../data/SrvUserTurnExtraTimeoutData";
import { SrvUserTurnExtraTimeoutDataSerializer } from "./SrvUserTurnExtraTimeoutDataSerializer";


export class SrvUserTurnExtraTimeoutCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUserTurnExtraTimeoutCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUserTurnExtraTimeoutDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUserTurnExtraTimeoutCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUserTurnExtraTimeoutData();
            SrvUserTurnExtraTimeoutDataSerializer.deserialize(buffer, command.data);
	}
}
