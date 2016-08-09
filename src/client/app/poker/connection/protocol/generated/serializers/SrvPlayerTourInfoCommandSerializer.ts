
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvPlayerTourInfoCommand } from "../commands/SrvPlayerTourInfoCommand";
import { SrvPlayerTourInfoData } from "../data/SrvPlayerTourInfoData";
import { SrvPlayerTourInfoDataSerializer } from "./SrvPlayerTourInfoDataSerializer";


export class SrvPlayerTourInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvPlayerTourInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvPlayerTourInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvPlayerTourInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvPlayerTourInfoData();
            SrvPlayerTourInfoDataSerializer.deserialize(buffer, command.data);
	}
}
