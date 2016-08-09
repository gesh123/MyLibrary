
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvLogonOkCommand } from "../commands/SrvLogonOkCommand";
import { SrvLogonOkData } from "../data/SrvLogonOkData";
import { SrvLogonOkDataSerializer } from "./SrvLogonOkDataSerializer";


export class SrvLogonOkCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvLogonOkCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvLogonOkDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvLogonOkCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvLogonOkData();
            SrvLogonOkDataSerializer.deserialize(buffer, command.data);
	}
}
