
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetPlayerProfileCommand } from "../commands/ClGetPlayerProfileCommand";
import { ClGetPlayerProfileData } from "../data/ClGetPlayerProfileData";
import { ClGetPlayerProfileDataSerializer } from "./ClGetPlayerProfileDataSerializer";


export class ClGetPlayerProfileCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetPlayerProfileCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetPlayerProfileDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetPlayerProfileCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetPlayerProfileData();
            ClGetPlayerProfileDataSerializer.deserialize(buffer, command.data);
	}
}
