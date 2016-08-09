
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvStartSelectingBuyInMultiplierCommand } from "../commands/SrvStartSelectingBuyInMultiplierCommand";
import { SrvStartSelectingBuyInMultiplierData } from "../data/SrvStartSelectingBuyInMultiplierData";
import { SrvStartSelectingBuyInMultiplierDataSerializer } from "./SrvStartSelectingBuyInMultiplierDataSerializer";


export class SrvStartSelectingBuyInMultiplierCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvStartSelectingBuyInMultiplierCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvStartSelectingBuyInMultiplierDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvStartSelectingBuyInMultiplierCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvStartSelectingBuyInMultiplierData();
            SrvStartSelectingBuyInMultiplierDataSerializer.deserialize(buffer, command.data);
	}
}
