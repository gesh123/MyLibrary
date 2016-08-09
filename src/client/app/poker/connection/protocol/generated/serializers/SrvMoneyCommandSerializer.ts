
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvMoneyCommand } from "../commands/SrvMoneyCommand";
import { SrvMoneyData } from "../data/SrvMoneyData";
import { SrvMoneyDataSerializer } from "./SrvMoneyDataSerializer";


export class SrvMoneyCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvMoneyCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvMoneyDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvMoneyCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvMoneyData();
            SrvMoneyDataSerializer.deserialize(buffer, command.data);
	}
}
