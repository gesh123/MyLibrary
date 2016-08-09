
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvConnectGameOKCommand } from "../commands/SrvConnectGameOKCommand";
import { SrvConnectGameOKData } from "../data/SrvConnectGameOKData";
import { SrvConnectGameOKDataSerializer } from "./SrvConnectGameOKDataSerializer";


export class SrvConnectGameOKCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvConnectGameOKCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvConnectGameOKDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvConnectGameOKCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvConnectGameOKData();
            SrvConnectGameOKDataSerializer.deserialize(buffer, command.data);
	}
}
