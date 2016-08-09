
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourEndRemainingHandsUpdateCommand } from "../commands/SrvTourEndRemainingHandsUpdateCommand";
import { SrvTourEndRemainingHandsUpdateData } from "../data/SrvTourEndRemainingHandsUpdateData";
import { SrvTourEndRemainingHandsUpdateDataSerializer } from "./SrvTourEndRemainingHandsUpdateDataSerializer";


export class SrvTourEndRemainingHandsUpdateCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourEndRemainingHandsUpdateCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourEndRemainingHandsUpdateDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourEndRemainingHandsUpdateCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourEndRemainingHandsUpdateData();
            SrvTourEndRemainingHandsUpdateDataSerializer.deserialize(buffer, command.data);
	}
}
