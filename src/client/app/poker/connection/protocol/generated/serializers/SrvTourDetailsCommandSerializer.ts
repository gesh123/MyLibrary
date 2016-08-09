
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourDetailsCommand } from "../commands/SrvTourDetailsCommand";
import { SrvTourDetailsData } from "../data/SrvTourDetailsData";
import { SrvTourDetailsDataSerializer } from "./SrvTourDetailsDataSerializer";


export class SrvTourDetailsCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourDetailsCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourDetailsDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourDetailsCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourDetailsData();
            SrvTourDetailsDataSerializer.deserialize(buffer, command.data);
	}
}
