
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClTourRegisterCommand } from "../commands/ClTourRegisterCommand";
import { ClTourRegisterData } from "../data/ClTourRegisterData";
import { ClTourRegisterDataSerializer } from "./ClTourRegisterDataSerializer";


export class ClTourRegisterCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClTourRegisterCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClTourRegisterDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClTourRegisterCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClTourRegisterData();
            ClTourRegisterDataSerializer.deserialize(buffer, command.data);
	}
}
