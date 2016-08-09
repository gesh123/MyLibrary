
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvSetJackpotsCommand } from "../commands/SrvSetJackpotsCommand";
import { SrvSetJackpotsData } from "../data/SrvSetJackpotsData";
import { SrvSetJackpotsDataSerializer } from "./SrvSetJackpotsDataSerializer";


export class SrvSetJackpotsCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvSetJackpotsCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvSetJackpotsDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvSetJackpotsCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvSetJackpotsData();
            SrvSetJackpotsDataSerializer.deserialize(buffer, command.data);
	}
}
