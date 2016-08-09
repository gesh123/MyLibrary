
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClNotifyLocaleIdChangeCommand } from "../commands/ClNotifyLocaleIdChangeCommand";
import { ClNotifyLocaleIdChangeData } from "../data/ClNotifyLocaleIdChangeData";
import { ClNotifyLocaleIdChangeDataSerializer } from "./ClNotifyLocaleIdChangeDataSerializer";


export class ClNotifyLocaleIdChangeCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClNotifyLocaleIdChangeCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClNotifyLocaleIdChangeDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClNotifyLocaleIdChangeCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClNotifyLocaleIdChangeData();
            ClNotifyLocaleIdChangeDataSerializer.deserialize(buffer, command.data);
	}
}
