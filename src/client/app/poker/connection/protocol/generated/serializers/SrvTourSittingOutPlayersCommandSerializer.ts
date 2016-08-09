
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourSittingOutPlayersCommand } from "../commands/SrvTourSittingOutPlayersCommand";
import { SrvTourSittingOutPlayersData } from "../data/SrvTourSittingOutPlayersData";
import { SrvTourSittingOutPlayersDataSerializer } from "./SrvTourSittingOutPlayersDataSerializer";


export class SrvTourSittingOutPlayersCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourSittingOutPlayersCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourSittingOutPlayersDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourSittingOutPlayersCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourSittingOutPlayersData();
            SrvTourSittingOutPlayersDataSerializer.deserialize(buffer, command.data);
	}
}
