
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourSeatInfoCommand } from "../commands/SrvTourSeatInfoCommand";
import { SrvTourSeatInfoData } from "../data/SrvTourSeatInfoData";
import { SrvTourSeatInfoDataSerializer } from "./SrvTourSeatInfoDataSerializer";


export class SrvTourSeatInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourSeatInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourSeatInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourSeatInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourSeatInfoData();
            SrvTourSeatInfoDataSerializer.deserialize(buffer, command.data);
	}
}
