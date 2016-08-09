
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUpdateJackpotsCommand } from "../commands/SrvUpdateJackpotsCommand";
import { SrvUpdateJackpotsData } from "../data/SrvUpdateJackpotsData";
import { SrvUpdateJackpotsDataSerializer } from "./SrvUpdateJackpotsDataSerializer";


export class SrvUpdateJackpotsCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUpdateJackpotsCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUpdateJackpotsDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUpdateJackpotsCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUpdateJackpotsData();
            SrvUpdateJackpotsDataSerializer.deserialize(buffer, command.data);
	}
}
