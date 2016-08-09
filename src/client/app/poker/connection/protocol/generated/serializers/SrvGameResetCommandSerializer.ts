
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvGameResetCommand } from "../commands/SrvGameResetCommand";
import { SrvGameResetData } from "../data/SrvGameResetData";
import { SrvGameResetDataSerializer } from "./SrvGameResetDataSerializer";


export class SrvGameResetCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvGameResetCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvGameResetDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvGameResetCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvGameResetData();
            SrvGameResetDataSerializer.deserialize(buffer, command.data);
	}
}
