
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClSetMyNickNameCommand } from "../commands/ClSetMyNickNameCommand";
import { ClSetMyNickNameData } from "../data/ClSetMyNickNameData";
import { ClSetMyNickNameDataSerializer } from "./ClSetMyNickNameDataSerializer";


export class ClSetMyNickNameCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClSetMyNickNameCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClSetMyNickNameDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClSetMyNickNameCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClSetMyNickNameData();
            ClSetMyNickNameDataSerializer.deserialize(buffer, command.data);
	}
}
