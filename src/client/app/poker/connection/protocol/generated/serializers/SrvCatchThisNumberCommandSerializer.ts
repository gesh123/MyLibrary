
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvCatchThisNumberCommand } from "../commands/SrvCatchThisNumberCommand";
import { SrvCatchThisNumberData } from "../data/SrvCatchThisNumberData";
import { SrvCatchThisNumberDataSerializer } from "./SrvCatchThisNumberDataSerializer";


export class SrvCatchThisNumberCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvCatchThisNumberCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvCatchThisNumberDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvCatchThisNumberCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvCatchThisNumberData();
            SrvCatchThisNumberDataSerializer.deserialize(buffer, command.data);
	}
}
