
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUserTurnCommand } from "../commands/SrvUserTurnCommand";
import { SrvUserTurnData } from "../data/SrvUserTurnData";
import { SrvUserTurnDataSerializer } from "./SrvUserTurnDataSerializer";


export class SrvUserTurnCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUserTurnCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUserTurnDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUserTurnCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUserTurnData();
            SrvUserTurnDataSerializer.deserialize(buffer, command.data);
	}
}
