
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvGameWaitersInfoCommand } from "../commands/SrvGameWaitersInfoCommand";
import { SrvGameWaitersInfoData } from "../data/SrvGameWaitersInfoData";
import { SrvGameWaitersInfoDataSerializer } from "./SrvGameWaitersInfoDataSerializer";


export class SrvGameWaitersInfoCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvGameWaitersInfoCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvGameWaitersInfoDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvGameWaitersInfoCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvGameWaitersInfoData();
            SrvGameWaitersInfoDataSerializer.deserialize(buffer, command.data);
	}
}
