
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvSetSnGBeastJackpotCommand } from "../commands/SrvSetSnGBeastJackpotCommand";
import { SrvSetSnGBeastJackpotData } from "../data/SrvSetSnGBeastJackpotData";
import { SrvSetSnGBeastJackpotDataSerializer } from "./SrvSetSnGBeastJackpotDataSerializer";


export class SrvSetSnGBeastJackpotCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvSetSnGBeastJackpotCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvSetSnGBeastJackpotDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvSetSnGBeastJackpotCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvSetSnGBeastJackpotData();
            SrvSetSnGBeastJackpotDataSerializer.deserialize(buffer, command.data);
	}
}
