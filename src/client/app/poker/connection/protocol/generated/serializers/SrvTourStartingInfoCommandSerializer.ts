
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourStartingInfoCommand } from "../commands/SrvTourStartingInfoCommand";
import { SrvTourStartingInfoData } from "../data/SrvTourStartingInfoData";
import { SrvTourStartingInfoDataSerializer } from "./SrvTourStartingInfoDataSerializer";


export class SrvTourStartingInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourStartingInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourStartingInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourStartingInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourStartingInfoData();
            SrvTourStartingInfoDataSerializer.deserialize(buffer, command.data);
	}
}
