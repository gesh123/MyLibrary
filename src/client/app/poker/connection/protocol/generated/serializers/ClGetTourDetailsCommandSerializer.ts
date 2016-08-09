
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { ClGetTourDetailsCommand } from "../commands/ClGetTourDetailsCommand";
import { ClGetTourDetailsData } from "../data/ClGetTourDetailsData";
import { ClGetTourDetailsDataSerializer } from "./ClGetTourDetailsDataSerializer";


export class ClGetTourDetailsCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: ClGetTourDetailsCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		ClGetTourDetailsDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: ClGetTourDetailsCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new ClGetTourDetailsData();
            ClGetTourDetailsDataSerializer.deserialize(buffer, command.data);
	}
}
