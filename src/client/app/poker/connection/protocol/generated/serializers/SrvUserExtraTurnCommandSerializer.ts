
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUserExtraTurnCommand } from "../commands/SrvUserExtraTurnCommand";
import { SrvUserExtraTurnData } from "../data/SrvUserExtraTurnData";
import { SrvUserExtraTurnDataSerializer } from "./SrvUserExtraTurnDataSerializer";


export class SrvUserExtraTurnCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUserExtraTurnCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUserExtraTurnDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUserExtraTurnCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUserExtraTurnData();
            SrvUserExtraTurnDataSerializer.deserialize(buffer, command.data);
	}
}
