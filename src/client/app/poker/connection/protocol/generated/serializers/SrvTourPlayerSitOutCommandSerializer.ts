
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourPlayerSitOutCommand } from "../commands/SrvTourPlayerSitOutCommand";
import { SrvTourPlayerSitOutData } from "../data/SrvTourPlayerSitOutData";
import { SrvTourPlayerSitOutDataSerializer } from "./SrvTourPlayerSitOutDataSerializer";


export class SrvTourPlayerSitOutCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourPlayerSitOutCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourPlayerSitOutDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourPlayerSitOutCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourPlayerSitOutData();
            SrvTourPlayerSitOutDataSerializer.deserialize(buffer, command.data);
	}
}
