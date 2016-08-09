
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvServerInfoCommand } from "../commands/SrvServerInfoCommand";
import { SrvServerInfoData } from "../data/SrvServerInfoData";
import { SrvServerInfoDataSerializer } from "./SrvServerInfoDataSerializer";


export class SrvServerInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvServerInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvServerInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvServerInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvServerInfoData();
            SrvServerInfoDataSerializer.deserialize(buffer, command.data);
	}
}
