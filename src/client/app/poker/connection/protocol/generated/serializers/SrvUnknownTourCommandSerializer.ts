
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUnknownTourCommand } from "../commands/SrvUnknownTourCommand";
import { SrvUnknownTourData } from "../data/SrvUnknownTourData";
import { SrvUnknownTourDataSerializer } from "./SrvUnknownTourDataSerializer";


export class SrvUnknownTourCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUnknownTourCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUnknownTourDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUnknownTourCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUnknownTourData();
            SrvUnknownTourDataSerializer.deserialize(buffer, command.data);
	}
}
