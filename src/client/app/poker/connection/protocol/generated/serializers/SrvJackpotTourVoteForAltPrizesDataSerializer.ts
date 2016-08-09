
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvJackpotTourVoteForAltPrizesData } from "../data/SrvJackpotTourVoteForAltPrizesData";


export class SrvJackpotTourVoteForAltPrizesDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourVoteForAltPrizesData): void {
		buffer.setUTF16StringNullTerminated( data.nickName );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourVoteForAltPrizesData): void {
		data.nickName = buffer.getUTF16StringNullTerminated();
			
	}
}
