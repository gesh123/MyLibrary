
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvOutOfMoneyCommand } from "../commands/SrvOutOfMoneyCommand";
import { SrvOutOfMoneyData } from "../data/SrvOutOfMoneyData";
import { SrvOutOfMoneyDataSerializer } from "./SrvOutOfMoneyDataSerializer";


export class SrvOutOfMoneyCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvOutOfMoneyCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvOutOfMoneyDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvOutOfMoneyCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvOutOfMoneyData();
            SrvOutOfMoneyDataSerializer.deserialize(buffer, command.data);
	}
}
