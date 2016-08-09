
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvGameInfoCommand } from "../commands/SrvGameInfoCommand";
import { SrvGameInfoData } from "../data/SrvGameInfoData";
import { SrvGameInfoDataSerializer } from "./SrvGameInfoDataSerializer";


export class SrvGameInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvGameInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvGameInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvGameInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvGameInfoData();
            SrvGameInfoDataSerializer.deserialize(buffer, command.data);
	}
}
