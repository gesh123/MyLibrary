
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClAutoTopupInfoCommand } from "../commands/ClAutoTopupInfoCommand";
import { ClAutoTopupInfoData } from "../data/ClAutoTopupInfoData";
import { ClAutoTopupInfoDataSerializer } from "./ClAutoTopupInfoDataSerializer";


export class ClAutoTopupInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClAutoTopupInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClAutoTopupInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClAutoTopupInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClAutoTopupInfoData();
            ClAutoTopupInfoDataSerializer.deserialize(buffer, command.data);
	}
}
