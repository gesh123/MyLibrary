
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvHoldemPlayerPosCommand } from "../commands/SrvHoldemPlayerPosCommand";
import { SrvHoldemPlayerPosData } from "../data/SrvHoldemPlayerPosData";
import { SrvHoldemPlayerPosDataSerializer } from "./SrvHoldemPlayerPosDataSerializer";


export class SrvHoldemPlayerPosCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvHoldemPlayerPosCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvHoldemPlayerPosDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvHoldemPlayerPosCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvHoldemPlayerPosData();
            SrvHoldemPlayerPosDataSerializer.deserialize(buffer, command.data);
	}
}
