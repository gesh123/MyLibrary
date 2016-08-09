
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourFinishedInfoCommand } from "../commands/SrvTourFinishedInfoCommand";
import { SrvTourFinishedInfoData } from "../data/SrvTourFinishedInfoData";
import { SrvTourFinishedInfoDataSerializer } from "./SrvTourFinishedInfoDataSerializer";


export class SrvTourFinishedInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourFinishedInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourFinishedInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourFinishedInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourFinishedInfoData();
            SrvTourFinishedInfoDataSerializer.deserialize(buffer, command.data);
	}
}
