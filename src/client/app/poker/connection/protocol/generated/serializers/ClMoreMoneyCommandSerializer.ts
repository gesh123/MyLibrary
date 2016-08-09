
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClMoreMoneyCommand } from "../commands/ClMoreMoneyCommand";
import { ClMoreMoneyData } from "../data/ClMoreMoneyData";
import { ClMoreMoneyDataSerializer } from "./ClMoreMoneyDataSerializer";


export class ClMoreMoneyCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClMoreMoneyCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClMoreMoneyDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClMoreMoneyCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClMoreMoneyData();
            ClMoreMoneyDataSerializer.deserialize(buffer, command.data);
	}
}
