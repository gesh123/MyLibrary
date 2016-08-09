
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvHandShakeOKCommand } from "../commands/SrvHandShakeOKCommand";
import { SrvHandShakeOKData } from "../data/SrvHandShakeOKData";
import { SrvHandShakeOKDataSerializer } from "./SrvHandShakeOKDataSerializer";


export class SrvHandShakeOKCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvHandShakeOKCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvHandShakeOKDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvHandShakeOKCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvHandShakeOKData();
            SrvHandShakeOKDataSerializer.deserialize(buffer, command.data);
	}
}
