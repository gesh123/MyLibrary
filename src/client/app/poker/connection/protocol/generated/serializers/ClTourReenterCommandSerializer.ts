
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClTourReenterCommand } from "../commands/ClTourReenterCommand";
import { ClTourReenterData } from "../data/ClTourReenterData";
import { ClTourReenterDataSerializer } from "./ClTourReenterDataSerializer";


export class ClTourReenterCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClTourReenterCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClTourReenterDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClTourReenterCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClTourReenterData();
            ClTourReenterDataSerializer.deserialize(buffer, command.data);
	}
}
