
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClUnsubscribeClientCommand } from "../commands/ClUnsubscribeClientCommand";
import { ClUnsubscribeClientData } from "../data/ClUnsubscribeClientData";
import { ClUnsubscribeClientDataSerializer } from "./ClUnsubscribeClientDataSerializer";


export class ClUnsubscribeClientCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClUnsubscribeClientCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClUnsubscribeClientDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClUnsubscribeClientCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClUnsubscribeClientData();
            ClUnsubscribeClientDataSerializer.deserialize(buffer, command.data);
	}
}
