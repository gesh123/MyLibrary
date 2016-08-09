
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvUpdateAddonsCountCommand } from "../commands/SrvUpdateAddonsCountCommand";
import { SrvUpdateAddonsCountData } from "../data/SrvUpdateAddonsCountData";
import { SrvUpdateAddonsCountDataSerializer } from "./SrvUpdateAddonsCountDataSerializer";


export class SrvUpdateAddonsCountCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvUpdateAddonsCountCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvUpdateAddonsCountDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvUpdateAddonsCountCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvUpdateAddonsCountData();
            SrvUpdateAddonsCountDataSerializer.deserialize(buffer, command.data);
	}
}
