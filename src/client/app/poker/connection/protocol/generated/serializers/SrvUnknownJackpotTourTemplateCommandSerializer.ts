
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUnknownJackpotTourTemplateCommand } from "../commands/SrvUnknownJackpotTourTemplateCommand";
import { SrvUnknownJackpotTourTemplateData } from "../data/SrvUnknownJackpotTourTemplateData";
import { SrvUnknownJackpotTourTemplateDataSerializer } from "./SrvUnknownJackpotTourTemplateDataSerializer";


export class SrvUnknownJackpotTourTemplateCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUnknownJackpotTourTemplateCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUnknownJackpotTourTemplateDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUnknownJackpotTourTemplateCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUnknownJackpotTourTemplateData();
            SrvUnknownJackpotTourTemplateDataSerializer.deserialize(buffer, command.data);
	}
}
