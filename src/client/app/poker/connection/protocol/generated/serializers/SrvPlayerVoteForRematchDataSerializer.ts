
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvPlayerVoteForRematchData } from "../data/SrvPlayerVoteForRematchData";


export class SrvPlayerVoteForRematchDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvPlayerVoteForRematchData): void {
		buffer.setUTF16StringNullTerminated( data.nickname );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvPlayerVoteForRematchData): void {
		data.nickname = buffer.getUTF16StringNullTerminated();
			
	}
}
