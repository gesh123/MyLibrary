
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClUnsubscribeFromQualifiersCommand } from "../commands/ClUnsubscribeFromQualifiersCommand";
import { ClUnsubscribeFromQualifiersData } from "../data/ClUnsubscribeFromQualifiersData";
import { ClUnsubscribeFromQualifiersDataSerializer } from "./ClUnsubscribeFromQualifiersDataSerializer";


export class ClUnsubscribeFromQualifiersCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClUnsubscribeFromQualifiersCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClUnsubscribeFromQualifiersDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClUnsubscribeFromQualifiersCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClUnsubscribeFromQualifiersData();
            ClUnsubscribeFromQualifiersDataSerializer.deserialize(buffer, command.data);
	}
}
