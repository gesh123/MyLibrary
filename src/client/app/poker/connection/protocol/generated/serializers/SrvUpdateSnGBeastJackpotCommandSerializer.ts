
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUpdateSnGBeastJackpotCommand } from "../commands/SrvUpdateSnGBeastJackpotCommand";
import { SrvUpdateSnGBeastJackpotData } from "../data/SrvUpdateSnGBeastJackpotData";
import { SrvUpdateSnGBeastJackpotDataSerializer } from "./SrvUpdateSnGBeastJackpotDataSerializer";


export class SrvUpdateSnGBeastJackpotCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUpdateSnGBeastJackpotCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUpdateSnGBeastJackpotDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUpdateSnGBeastJackpotCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUpdateSnGBeastJackpotData();
            SrvUpdateSnGBeastJackpotDataSerializer.deserialize(buffer, command.data);
	}
}
