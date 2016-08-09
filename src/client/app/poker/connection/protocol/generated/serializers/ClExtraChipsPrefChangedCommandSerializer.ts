
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClExtraChipsPrefChangedCommand } from "../commands/ClExtraChipsPrefChangedCommand";
import { ClExtraChipsPrefChangedData } from "../data/ClExtraChipsPrefChangedData";
import { ClExtraChipsPrefChangedDataSerializer } from "./ClExtraChipsPrefChangedDataSerializer";


export class ClExtraChipsPrefChangedCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClExtraChipsPrefChangedCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClExtraChipsPrefChangedDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClExtraChipsPrefChangedCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClExtraChipsPrefChangedData();
            ClExtraChipsPrefChangedDataSerializer.deserialize(buffer, command.data);
	}
}
