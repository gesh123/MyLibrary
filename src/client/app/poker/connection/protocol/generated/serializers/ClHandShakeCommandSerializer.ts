
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClHandShakeCommand } from "../commands/ClHandShakeCommand";
import { ClHandShakeData } from "../data/ClHandShakeData";
import { ClHandShakeDataSerializer } from "./ClHandShakeDataSerializer";


export class ClHandShakeCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClHandShakeCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClHandShakeDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClHandShakeCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClHandShakeData();
            ClHandShakeDataSerializer.deserialize(buffer, command.data);
	}
}
