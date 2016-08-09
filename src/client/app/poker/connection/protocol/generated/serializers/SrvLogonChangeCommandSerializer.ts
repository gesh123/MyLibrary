
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvLogonChangeCommand } from "../commands/SrvLogonChangeCommand";
import { SrvLogonChangeData } from "../data/SrvLogonChangeData";
import { SrvLogonChangeDataSerializer } from "./SrvLogonChangeDataSerializer";


export class SrvLogonChangeCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvLogonChangeCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvLogonChangeDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvLogonChangeCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvLogonChangeData();
            SrvLogonChangeDataSerializer.deserialize(buffer, command.data);
	}
}
