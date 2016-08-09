
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerTourFinishedPlayerInfoData } from "../data/PokerTourFinishedPlayerInfoData";


export class PokerTourFinishedPlayerInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerTourFinishedPlayerInfoData): void {
		buffer.setUint8( data.place );
			buffer.setUTF16StringNullTerminated( data.name );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerTourFinishedPlayerInfoData): void {
		data.place = buffer.getUint8();
			data.name = buffer.getUTF16StringNullTerminated();
			
	}
}
