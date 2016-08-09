
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUpdateTourReentrantsCountCommand } from "../commands/SrvUpdateTourReentrantsCountCommand";
import { SrvUpdateTourReentrantsCountData } from "../data/SrvUpdateTourReentrantsCountData";
import { SrvUpdateTourReentrantsCountDataSerializer } from "./SrvUpdateTourReentrantsCountDataSerializer";


export class SrvUpdateTourReentrantsCountCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUpdateTourReentrantsCountCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUpdateTourReentrantsCountDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUpdateTourReentrantsCountCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUpdateTourReentrantsCountData();
            SrvUpdateTourReentrantsCountDataSerializer.deserialize(buffer, command.data);
	}
}
