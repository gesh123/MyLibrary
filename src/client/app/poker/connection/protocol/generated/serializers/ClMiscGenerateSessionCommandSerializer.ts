
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClMiscGenerateSessionCommand } from "../commands/ClMiscGenerateSessionCommand";
import { ClMiscGenerateSessionData } from "../data/ClMiscGenerateSessionData";
import { ClMiscGenerateSessionDataSerializer } from "./ClMiscGenerateSessionDataSerializer";


export class ClMiscGenerateSessionCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClMiscGenerateSessionCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClMiscGenerateSessionDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClMiscGenerateSessionCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClMiscGenerateSessionData();
            ClMiscGenerateSessionDataSerializer.deserialize(buffer, command.data);
	}
}
