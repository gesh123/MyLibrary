
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourEndRemainingHandsCommand } from "../commands/SrvTourEndRemainingHandsCommand";
import { SrvTourEndRemainingHandsData } from "../data/SrvTourEndRemainingHandsData";
import { SrvTourEndRemainingHandsDataSerializer } from "./SrvTourEndRemainingHandsDataSerializer";


export class SrvTourEndRemainingHandsCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourEndRemainingHandsCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourEndRemainingHandsDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourEndRemainingHandsCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourEndRemainingHandsData();
            SrvTourEndRemainingHandsDataSerializer.deserialize(buffer, command.data);
	}
}
