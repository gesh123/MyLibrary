
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvSitErrorCommand } from "../commands/SrvSitErrorCommand";
import { SrvSitErrorData } from "../data/SrvSitErrorData";
import { SrvSitErrorDataSerializer } from "./SrvSitErrorDataSerializer";


export class SrvSitErrorCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvSitErrorCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvSitErrorDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvSitErrorCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvSitErrorData();
            SrvSitErrorDataSerializer.deserialize(buffer, command.data);
	}
}
