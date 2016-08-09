
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUserActionNotifyCommand } from "../commands/SrvUserActionNotifyCommand";
import { SrvUserActionNotifyData } from "../data/SrvUserActionNotifyData";
import { SrvUserActionNotifyDataSerializer } from "./SrvUserActionNotifyDataSerializer";


export class SrvUserActionNotifyCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUserActionNotifyCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUserActionNotifyDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUserActionNotifyCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUserActionNotifyData();
            SrvUserActionNotifyDataSerializer.deserialize(buffer, command.data);
	}
}
