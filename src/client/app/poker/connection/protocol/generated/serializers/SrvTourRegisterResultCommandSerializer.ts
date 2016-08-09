
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourRegisterResultCommand } from "../commands/SrvTourRegisterResultCommand";
import { SrvTourRegisterResultData } from "../data/SrvTourRegisterResultData";
import { SrvTourRegisterResultDataSerializer } from "./SrvTourRegisterResultDataSerializer";


export class SrvTourRegisterResultCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourRegisterResultCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourRegisterResultDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourRegisterResultCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourRegisterResultData();
            SrvTourRegisterResultDataSerializer.deserialize(buffer, command.data);
	}
}
