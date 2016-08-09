
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvLongCommentCommand } from "../commands/SrvLongCommentCommand";
import { SrvLongCommentData } from "../data/SrvLongCommentData";
import { SrvLongCommentDataSerializer } from "./SrvLongCommentDataSerializer";


export class SrvLongCommentCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvLongCommentCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvLongCommentDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvLongCommentCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvLongCommentData();
            SrvLongCommentDataSerializer.deserialize(buffer, command.data);
	}
}
