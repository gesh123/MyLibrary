
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetTourTableInfoCommand } from "../commands/ClGetTourTableInfoCommand";
import { ClGetTourTableInfoData } from "../data/ClGetTourTableInfoData";
import { ClGetTourTableInfoDataSerializer } from "./ClGetTourTableInfoDataSerializer";


export class ClGetTourTableInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetTourTableInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetTourTableInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetTourTableInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetTourTableInfoData();
            ClGetTourTableInfoDataSerializer.deserialize(buffer, command.data);
	}
}
