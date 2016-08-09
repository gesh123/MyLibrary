
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvMultiTourInitializeCommand } from "../commands/SrvMultiTourInitializeCommand";
import { SrvMultiTourInitializeData } from "../data/SrvMultiTourInitializeData";
import { SrvMultiTourInitializeDataSerializer } from "./SrvMultiTourInitializeDataSerializer";


export class SrvMultiTourInitializeCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvMultiTourInitializeCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvMultiTourInitializeDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvMultiTourInitializeCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvMultiTourInitializeData();
            SrvMultiTourInitializeDataSerializer.deserialize(buffer, command.data);
	}
}
