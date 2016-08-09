
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTransferUncalledBetCommand } from "../commands/SrvTransferUncalledBetCommand";
import { SrvTransferUncalledBetData } from "../data/SrvTransferUncalledBetData";
import { SrvTransferUncalledBetDataSerializer } from "./SrvTransferUncalledBetDataSerializer";


export class SrvTransferUncalledBetCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTransferUncalledBetCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTransferUncalledBetDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTransferUncalledBetCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTransferUncalledBetData();
            SrvTransferUncalledBetDataSerializer.deserialize(buffer, command.data);
	}
}
