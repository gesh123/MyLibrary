
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvPotCardDealCommand } from "../commands/SrvPotCardDealCommand";
import { SrvPotCardDealData } from "../data/SrvPotCardDealData";
import { SrvPotCardDealDataSerializer } from "./SrvPotCardDealDataSerializer";


export class SrvPotCardDealCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvPotCardDealCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvPotCardDealDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvPotCardDealCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvPotCardDealData();
            SrvPotCardDealDataSerializer.deserialize(buffer, command.data);
	}
}
