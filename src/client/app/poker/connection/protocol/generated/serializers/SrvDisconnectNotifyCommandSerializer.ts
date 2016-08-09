
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvDisconnectNotifyCommand } from "../commands/SrvDisconnectNotifyCommand";
import { SrvDisconnectNotifyData } from "../data/SrvDisconnectNotifyData";
import { SrvDisconnectNotifyDataSerializer } from "./SrvDisconnectNotifyDataSerializer";


export class SrvDisconnectNotifyCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvDisconnectNotifyCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvDisconnectNotifyDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvDisconnectNotifyCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvDisconnectNotifyData();
            SrvDisconnectNotifyDataSerializer.deserialize(buffer, command.data);
	}
}
