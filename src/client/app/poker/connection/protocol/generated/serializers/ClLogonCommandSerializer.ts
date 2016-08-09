
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClLogonCommand } from "../commands/ClLogonCommand";
import { ClLogonData } from "../data/ClLogonData";
import { ClLogonDataSerializer } from "./ClLogonDataSerializer";


export class ClLogonCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClLogonCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClLogonDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClLogonCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClLogonData();
            ClLogonDataSerializer.deserialize(buffer, command.data);
	}
}
