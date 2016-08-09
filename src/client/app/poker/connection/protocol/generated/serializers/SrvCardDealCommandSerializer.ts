
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvCardDealCommand } from "../commands/SrvCardDealCommand";
import { SrvCardDealData } from "../data/SrvCardDealData";
import { SrvCardDealDataSerializer } from "./SrvCardDealDataSerializer";


export class SrvCardDealCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvCardDealCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvCardDealDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvCardDealCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvCardDealData();
            SrvCardDealDataSerializer.deserialize(buffer, command.data);
	}
}
