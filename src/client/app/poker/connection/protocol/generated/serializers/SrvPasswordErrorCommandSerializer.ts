
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvPasswordErrorCommand } from "../commands/SrvPasswordErrorCommand";
import { SrvPasswordErrorData } from "../data/SrvPasswordErrorData";
import { SrvPasswordErrorDataSerializer } from "./SrvPasswordErrorDataSerializer";


export class SrvPasswordErrorCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvPasswordErrorCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvPasswordErrorDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvPasswordErrorCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvPasswordErrorData();
            SrvPasswordErrorDataSerializer.deserialize(buffer, command.data);
	}
}
