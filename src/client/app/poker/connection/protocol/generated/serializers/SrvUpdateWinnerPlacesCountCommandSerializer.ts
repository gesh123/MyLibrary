
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUpdateWinnerPlacesCountCommand } from "../commands/SrvUpdateWinnerPlacesCountCommand";
import { SrvUpdateWinnerPlacesCountData } from "../data/SrvUpdateWinnerPlacesCountData";
import { SrvUpdateWinnerPlacesCountDataSerializer } from "./SrvUpdateWinnerPlacesCountDataSerializer";


export class SrvUpdateWinnerPlacesCountCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUpdateWinnerPlacesCountCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUpdateWinnerPlacesCountDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUpdateWinnerPlacesCountCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUpdateWinnerPlacesCountData();
            SrvUpdateWinnerPlacesCountDataSerializer.deserialize(buffer, command.data);
	}
}
