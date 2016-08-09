
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvAdminMsgCommand } from "../commands/SrvAdminMsgCommand";
import { SrvAdminMsgData } from "../data/SrvAdminMsgData";
import { SrvAdminMsgDataSerializer } from "./SrvAdminMsgDataSerializer";


export class SrvAdminMsgCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvAdminMsgCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvAdminMsgDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvAdminMsgCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvAdminMsgData();
            SrvAdminMsgDataSerializer.deserialize(buffer, command.data);
	}
}
