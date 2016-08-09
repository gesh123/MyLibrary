
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvStartTourRematchVotingData } from "../data/SrvStartTourRematchVotingData";


export class SrvStartTourRematchVotingDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvStartTourRematchVotingData): void {
		buffer.setUint16( data.finishPlace );
			buffer.setUint16( data.score );
			buffer.setUTF16StringNullTerminated( data.nickname );
			buffer.setUint16( data.opponentScore );
			buffer.setUTF16StringNullTerminated( data.opponentNickname );
			buffer.setUint16( data.votingTimeout );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvStartTourRematchVotingData): void {
		data.finishPlace = buffer.getUint16();
			data.score = buffer.getUint16();
			data.nickname = buffer.getUTF16StringNullTerminated();
			data.opponentScore = buffer.getUint16();
			data.opponentNickname = buffer.getUTF16StringNullTerminated();
			data.votingTimeout = buffer.getUint16();
			
	}
}
