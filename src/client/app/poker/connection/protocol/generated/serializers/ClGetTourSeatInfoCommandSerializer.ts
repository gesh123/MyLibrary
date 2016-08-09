
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetTourSeatInfoCommand } from "../commands/ClGetTourSeatInfoCommand";
import { ClGetTourSeatInfoData } from "../data/ClGetTourSeatInfoData";
import { ClGetTourSeatInfoDataSerializer } from "./ClGetTourSeatInfoDataSerializer";


export class ClGetTourSeatInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetTourSeatInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetTourSeatInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetTourSeatInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetTourSeatInfoData();
            ClGetTourSeatInfoDataSerializer.deserialize(buffer, command.data);
	}
}
