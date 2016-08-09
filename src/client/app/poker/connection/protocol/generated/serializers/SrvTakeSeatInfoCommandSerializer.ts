
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTakeSeatInfoCommand } from "../commands/SrvTakeSeatInfoCommand";
import { SrvTakeSeatInfoData } from "../data/SrvTakeSeatInfoData";
import { SrvTakeSeatInfoDataSerializer } from "./SrvTakeSeatInfoDataSerializer";


export class SrvTakeSeatInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTakeSeatInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTakeSeatInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTakeSeatInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTakeSeatInfoData();
            SrvTakeSeatInfoDataSerializer.deserialize(buffer, command.data);
	}
}
