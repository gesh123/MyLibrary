
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvLogonErrorCommand } from "../commands/SrvLogonErrorCommand";
import { SrvLogonErrorData } from "../data/SrvLogonErrorData";
import { SrvLogonErrorDataSerializer } from "./SrvLogonErrorDataSerializer";


export class SrvLogonErrorCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvLogonErrorCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvLogonErrorDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvLogonErrorCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvLogonErrorData();
            SrvLogonErrorDataSerializer.deserialize(buffer, command.data);
	}
}
