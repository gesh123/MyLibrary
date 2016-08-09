
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClTourUnregisterCommand } from "../commands/ClTourUnregisterCommand";
import { ClTourUnregisterData } from "../data/ClTourUnregisterData";
import { ClTourUnregisterDataSerializer } from "./ClTourUnregisterDataSerializer";


export class ClTourUnregisterCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClTourUnregisterCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClTourUnregisterDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClTourUnregisterCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClTourUnregisterData();
            ClTourUnregisterDataSerializer.deserialize(buffer, command.data);
	}
}
