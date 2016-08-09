
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUpdateTimeBankConfigCommand } from "../commands/SrvUpdateTimeBankConfigCommand";
import { SrvUpdateTimeBankConfigData } from "../data/SrvUpdateTimeBankConfigData";
import { SrvUpdateTimeBankConfigDataSerializer } from "./SrvUpdateTimeBankConfigDataSerializer";


export class SrvUpdateTimeBankConfigCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUpdateTimeBankConfigCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUpdateTimeBankConfigDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUpdateTimeBankConfigCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUpdateTimeBankConfigData();
            SrvUpdateTimeBankConfigDataSerializer.deserialize(buffer, command.data);
	}
}
