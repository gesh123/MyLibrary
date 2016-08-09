
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvJackpotTourVoteForAltPrizesCommand } from "../commands/SrvJackpotTourVoteForAltPrizesCommand";
import { SrvJackpotTourVoteForAltPrizesData } from "../data/SrvJackpotTourVoteForAltPrizesData";
import { SrvJackpotTourVoteForAltPrizesDataSerializer } from "./SrvJackpotTourVoteForAltPrizesDataSerializer";


export class SrvJackpotTourVoteForAltPrizesCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourVoteForAltPrizesCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvJackpotTourVoteForAltPrizesDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvJackpotTourVoteForAltPrizesCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvJackpotTourVoteForAltPrizesData();
            SrvJackpotTourVoteForAltPrizesDataSerializer.deserialize(buffer, command.data);
	}
}
