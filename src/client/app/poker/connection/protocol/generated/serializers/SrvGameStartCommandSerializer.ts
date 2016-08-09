
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvGameStartCommand } from "../commands/SrvGameStartCommand";
import { SrvGameStartData } from "../data/SrvGameStartData";
import { SrvGameStartDataSerializer } from "./SrvGameStartDataSerializer";


export class SrvGameStartCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvGameStartCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvGameStartDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvGameStartCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvGameStartData();
            SrvGameStartDataSerializer.deserialize(buffer, command.data);
	}
}
