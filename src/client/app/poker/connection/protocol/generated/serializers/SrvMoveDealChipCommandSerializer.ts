
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvMoveDealChipCommand } from "../commands/SrvMoveDealChipCommand";
import { SrvMoveDealChipData } from "../data/SrvMoveDealChipData";
import { SrvMoveDealChipDataSerializer } from "./SrvMoveDealChipDataSerializer";


export class SrvMoveDealChipCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvMoveDealChipCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvMoveDealChipDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvMoveDealChipCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvMoveDealChipData();
            SrvMoveDealChipDataSerializer.deserialize(buffer, command.data);
	}
}
