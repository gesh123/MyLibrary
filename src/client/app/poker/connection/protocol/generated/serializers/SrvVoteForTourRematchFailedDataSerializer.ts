
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvVoteForTourRematchFailedData } from "../data/SrvVoteForTourRematchFailedData";


export class SrvVoteForTourRematchFailedDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvVoteForTourRematchFailedData): void {
		buffer.setUTF16StringNullTerminated( data.nickname );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvVoteForTourRematchFailedData): void {
		data.nickname = buffer.getUTF16StringNullTerminated();
			
	}
}
