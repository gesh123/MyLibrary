
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvRakeRacePointsCommand } from "../commands/SrvRakeRacePointsCommand";
import { SrvRakeRacePointsData } from "../data/SrvRakeRacePointsData";
import { SrvRakeRacePointsDataSerializer } from "./SrvRakeRacePointsDataSerializer";


export class SrvRakeRacePointsCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvRakeRacePointsCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvRakeRacePointsDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvRakeRacePointsCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvRakeRacePointsData();
            SrvRakeRacePointsDataSerializer.deserialize(buffer, command.data);
	}
}
