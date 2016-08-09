
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvPlayerRemovedFromTourCommand } from "../commands/SrvPlayerRemovedFromTourCommand";
import { SrvPlayerRemovedFromTourData } from "../data/SrvPlayerRemovedFromTourData";
import { SrvPlayerRemovedFromTourDataSerializer } from "./SrvPlayerRemovedFromTourDataSerializer";


export class SrvPlayerRemovedFromTourCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvPlayerRemovedFromTourCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvPlayerRemovedFromTourDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvPlayerRemovedFromTourCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvPlayerRemovedFromTourData();
            SrvPlayerRemovedFromTourDataSerializer.deserialize(buffer, command.data);
	}
}
