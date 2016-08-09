
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClRejectInviteCommand } from "../commands/ClRejectInviteCommand";
import { ClRejectInviteData } from "../data/ClRejectInviteData";
import { ClRejectInviteDataSerializer } from "./ClRejectInviteDataSerializer";


export class ClRejectInviteCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClRejectInviteCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClRejectInviteDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClRejectInviteCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClRejectInviteData();
            ClRejectInviteDataSerializer.deserialize(buffer, command.data);
	}
}
