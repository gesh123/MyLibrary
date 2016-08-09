
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourStartInfoCommand } from "../commands/SrvTourStartInfoCommand";
import { SrvTourStartInfoData } from "../data/SrvTourStartInfoData";
import { SrvTourStartInfoDataSerializer } from "./SrvTourStartInfoDataSerializer";


export class SrvTourStartInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourStartInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourStartInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourStartInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourStartInfoData();
            SrvTourStartInfoDataSerializer.deserialize(buffer, command.data);
	}
}
