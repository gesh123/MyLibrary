
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvSendTourAutoMsgCommand } from "../commands/SrvSendTourAutoMsgCommand";
import { SrvSendTourAutoMsgData } from "../data/SrvSendTourAutoMsgData";
import { SrvSendTourAutoMsgDataSerializer } from "./SrvSendTourAutoMsgDataSerializer";


export class SrvSendTourAutoMsgCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvSendTourAutoMsgCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvSendTourAutoMsgDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvSendTourAutoMsgCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvSendTourAutoMsgData();
            SrvSendTourAutoMsgDataSerializer.deserialize(buffer, command.data);
	}
}
