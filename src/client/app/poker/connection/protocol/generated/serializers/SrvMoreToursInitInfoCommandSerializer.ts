
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvMoreToursInitInfoCommand } from "../commands/SrvMoreToursInitInfoCommand";
import { SrvMoreToursInitInfoData } from "../data/SrvMoreToursInitInfoData";
import { SrvMoreToursInitInfoDataSerializer } from "./SrvMoreToursInitInfoDataSerializer";


export class SrvMoreToursInitInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvMoreToursInitInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvMoreToursInitInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvMoreToursInitInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvMoreToursInitInfoData();
            SrvMoreToursInitInfoDataSerializer.deserialize(buffer, command.data);
	}
}
