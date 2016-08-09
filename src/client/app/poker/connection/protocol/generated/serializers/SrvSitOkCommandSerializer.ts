
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvSitOkCommand } from "../commands/SrvSitOkCommand";
import { SrvSitOkData } from "../data/SrvSitOkData";
import { SrvSitOkDataSerializer } from "./SrvSitOkDataSerializer";


export class SrvSitOkCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvSitOkCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvSitOkDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvSitOkCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvSitOkData();
            SrvSitOkDataSerializer.deserialize(buffer, command.data);
	}
}
