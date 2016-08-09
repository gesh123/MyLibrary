
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { PokerCommandHeaderSerializer } from "../../core/serializers/PokerCommandHeaderSerializer";
import { PokerCommandHeader } from "../../core/data/PokerCommandHeader";
import { SrvTourRematchVotingInProgressCommand } from "../commands/SrvTourRematchVotingInProgressCommand";
import { SrvTourRematchVotingInProgressData } from "../data/SrvTourRematchVotingInProgressData";
import { SrvTourRematchVotingInProgressDataSerializer } from "./SrvTourRematchVotingInProgressDataSerializer";


export class SrvTourRematchVotingInProgressCommandSerializer {
	public static serialize(buffer: ArrayBufferBuilder, command: SrvTourRematchVotingInProgressCommand ): void {
		buffer.pointer += PokerCommandHeader.HEADER_SIZE_BYTES;
		SrvTourRematchVotingInProgressDataSerializer.serialize(buffer, command.data);
			
		PokerCommandHeaderSerializer.serialize(buffer, command.header);
	}

	public static deserialize(buffer: ArrayBufferBuilder, command: SrvTourRematchVotingInProgressCommand ): void {
		PokerCommandHeaderSerializer.deserialize(buffer, command.header);
		
			command.data = new SrvTourRematchVotingInProgressData();
            SrvTourRematchVotingInProgressDataSerializer.deserialize(buffer, command.data);
	}
}
