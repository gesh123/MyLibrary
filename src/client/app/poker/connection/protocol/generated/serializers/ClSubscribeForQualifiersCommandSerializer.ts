
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClSubscribeForQualifiersCommand } from "../commands/ClSubscribeForQualifiersCommand";
import { ClSubscribeForQualifiersData } from "../data/ClSubscribeForQualifiersData";
import { ClSubscribeForQualifiersDataSerializer } from "./ClSubscribeForQualifiersDataSerializer";


export class ClSubscribeForQualifiersCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClSubscribeForQualifiersCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClSubscribeForQualifiersDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClSubscribeForQualifiersCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClSubscribeForQualifiersData();
            ClSubscribeForQualifiersDataSerializer.deserialize(buffer, command.data);
	}
}
