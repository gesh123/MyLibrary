
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourEndRemainingPlayersCommand } from "../commands/SrvTourEndRemainingPlayersCommand";
import { SrvTourEndRemainingPlayersData } from "../data/SrvTourEndRemainingPlayersData";
import { SrvTourEndRemainingPlayersDataSerializer } from "./SrvTourEndRemainingPlayersDataSerializer";


export class SrvTourEndRemainingPlayersCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourEndRemainingPlayersCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourEndRemainingPlayersDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourEndRemainingPlayersCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourEndRemainingPlayersData();
            SrvTourEndRemainingPlayersDataSerializer.deserialize(buffer, command.data);
	}
}
