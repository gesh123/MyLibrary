
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourQualifiersCommand } from "../commands/SrvTourQualifiersCommand";
import { SrvTourQualifiersData } from "../data/SrvTourQualifiersData";
import { SrvTourQualifiersDataSerializer } from "./SrvTourQualifiersDataSerializer";


export class SrvTourQualifiersCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourQualifiersCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourQualifiersDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourQualifiersCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourQualifiersData();
            SrvTourQualifiersDataSerializer.deserialize(buffer, command.data);
	}
}
