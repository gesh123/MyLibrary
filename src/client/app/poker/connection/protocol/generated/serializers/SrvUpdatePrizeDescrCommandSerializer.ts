
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUpdatePrizeDescrCommand } from "../commands/SrvUpdatePrizeDescrCommand";
import { SrvUpdatePrizeDescrData } from "../data/SrvUpdatePrizeDescrData";
import { SrvUpdatePrizeDescrDataSerializer } from "./SrvUpdatePrizeDescrDataSerializer";


export class SrvUpdatePrizeDescrCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUpdatePrizeDescrCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUpdatePrizeDescrDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUpdatePrizeDescrCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUpdatePrizeDescrData();
            SrvUpdatePrizeDescrDataSerializer.deserialize(buffer, command.data);
	}
}
