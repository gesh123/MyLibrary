
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourTableInfoCommand } from "../commands/SrvTourTableInfoCommand";
import { SrvTourTableInfoData } from "../data/SrvTourTableInfoData";
import { SrvTourTableInfoDataSerializer } from "./SrvTourTableInfoDataSerializer";


export class SrvTourTableInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourTableInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourTableInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourTableInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourTableInfoData();
            SrvTourTableInfoDataSerializer.deserialize(buffer, command.data);
	}
}
