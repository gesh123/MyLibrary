
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourRematchVotingInProgressData } from "../data/SrvTourRematchVotingInProgressData";


export class SrvTourRematchVotingInProgressDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourRematchVotingInProgressData): void {
		buffer.setUint16( data.finishPlace );
			buffer.setUint16( data.score );
			buffer.setUTF16StringNullTerminated( data.nickname );
			buffer.setUint16( data.opponentScore );
			buffer.setUTF16StringNullTerminated( data.opponentNickname );
			buffer.setUint8( data.isOpponentVoted ? 1 : 0 );
			buffer.setUint16( data.votingTimeLeft );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourRematchVotingInProgressData): void {
		data.finishPlace = buffer.getUint16();
			data.score = buffer.getUint16();
			data.nickname = buffer.getUTF16StringNullTerminated();
			data.opponentScore = buffer.getUint16();
			data.opponentNickname = buffer.getUTF16StringNullTerminated();
			data.isOpponentVoted = buffer.getUint8() != 0;
			data.votingTimeLeft = buffer.getUint16();
			
	}
}
