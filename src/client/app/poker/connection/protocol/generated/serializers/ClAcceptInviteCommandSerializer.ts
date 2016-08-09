
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClAcceptInviteCommand } from "../commands/ClAcceptInviteCommand";
import { ClAcceptInviteData } from "../data/ClAcceptInviteData";
import { ClAcceptInviteDataSerializer } from "./ClAcceptInviteDataSerializer";


export class ClAcceptInviteCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClAcceptInviteCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClAcceptInviteDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClAcceptInviteCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClAcceptInviteData();
            ClAcceptInviteDataSerializer.deserialize(buffer, command.data);
	}
}
