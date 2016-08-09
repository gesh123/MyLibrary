
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourTourneyStatusCommand } from "../commands/SrvTourTourneyStatusCommand";
import { SrvTourTourneyStatusData } from "../data/SrvTourTourneyStatusData";
import { SrvTourTourneyStatusDataSerializer } from "./SrvTourTourneyStatusDataSerializer";


export class SrvTourTourneyStatusCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourTourneyStatusCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourTourneyStatusDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourTourneyStatusCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourTourneyStatusData();
            SrvTourTourneyStatusDataSerializer.deserialize(buffer, command.data);
	}
}
