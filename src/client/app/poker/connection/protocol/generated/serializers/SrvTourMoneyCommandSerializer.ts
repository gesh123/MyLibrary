
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourMoneyCommand } from "../commands/SrvTourMoneyCommand";
import { SrvTourMoneyData } from "../data/SrvTourMoneyData";
import { SrvTourMoneyDataSerializer } from "./SrvTourMoneyDataSerializer";


export class SrvTourMoneyCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourMoneyCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourMoneyDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourMoneyCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourMoneyData();
            SrvTourMoneyDataSerializer.deserialize(buffer, command.data);
	}
}
