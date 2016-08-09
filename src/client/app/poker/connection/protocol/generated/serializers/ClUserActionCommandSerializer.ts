
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClUserActionCommand } from "../commands/ClUserActionCommand";
import { ClUserActionData } from "../data/ClUserActionData";
import { ClUserActionDataSerializer } from "./ClUserActionDataSerializer";


export class ClUserActionCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClUserActionCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClUserActionDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClUserActionCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClUserActionData();
            ClUserActionDataSerializer.deserialize(buffer, command.data);
	}
}
