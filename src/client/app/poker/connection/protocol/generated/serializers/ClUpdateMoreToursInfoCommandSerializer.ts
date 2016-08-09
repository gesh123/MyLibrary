
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClUpdateMoreToursInfoCommand } from "../commands/ClUpdateMoreToursInfoCommand";
import { ClUpdateMoreToursInfoData } from "../data/ClUpdateMoreToursInfoData";
import { ClUpdateMoreToursInfoDataSerializer } from "./ClUpdateMoreToursInfoDataSerializer";


export class ClUpdateMoreToursInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClUpdateMoreToursInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClUpdateMoreToursInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClUpdateMoreToursInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClUpdateMoreToursInfoData();
            ClUpdateMoreToursInfoDataSerializer.deserialize(buffer, command.data);
	}
}
