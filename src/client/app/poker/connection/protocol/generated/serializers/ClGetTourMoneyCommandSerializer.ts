
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetTourMoneyCommand } from "../commands/ClGetTourMoneyCommand";
import { ClGetTourMoneyData } from "../data/ClGetTourMoneyData";
import { ClGetTourMoneyDataSerializer } from "./ClGetTourMoneyDataSerializer";


export class ClGetTourMoneyCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetTourMoneyCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetTourMoneyDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetTourMoneyCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetTourMoneyData();
            ClGetTourMoneyDataSerializer.deserialize(buffer, command.data);
	}
}
