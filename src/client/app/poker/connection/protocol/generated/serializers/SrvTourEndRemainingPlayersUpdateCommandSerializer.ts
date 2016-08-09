
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourEndRemainingPlayersUpdateCommand } from "../commands/SrvTourEndRemainingPlayersUpdateCommand";
import { SrvTourEndRemainingPlayersUpdateData } from "../data/SrvTourEndRemainingPlayersUpdateData";
import { SrvTourEndRemainingPlayersUpdateDataSerializer } from "./SrvTourEndRemainingPlayersUpdateDataSerializer";


export class SrvTourEndRemainingPlayersUpdateCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourEndRemainingPlayersUpdateCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourEndRemainingPlayersUpdateDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourEndRemainingPlayersUpdateCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourEndRemainingPlayersUpdateData();
            SrvTourEndRemainingPlayersUpdateDataSerializer.deserialize(buffer, command.data);
	}
}
