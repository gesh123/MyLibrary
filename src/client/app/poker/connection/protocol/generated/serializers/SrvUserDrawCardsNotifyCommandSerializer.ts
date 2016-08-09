
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUserDrawCardsNotifyCommand } from "../commands/SrvUserDrawCardsNotifyCommand";
import { SrvUserDrawCardsNotifyData } from "../data/SrvUserDrawCardsNotifyData";
import { SrvUserDrawCardsNotifyDataSerializer } from "./SrvUserDrawCardsNotifyDataSerializer";


export class SrvUserDrawCardsNotifyCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUserDrawCardsNotifyCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUserDrawCardsNotifyDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUserDrawCardsNotifyCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUserDrawCardsNotifyData();
            SrvUserDrawCardsNotifyDataSerializer.deserialize(buffer, command.data);
	}
}
