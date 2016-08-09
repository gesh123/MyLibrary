
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvMoveDealChipData } from "../data/SrvMoveDealChipData";


export class SrvMoveDealChipDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvMoveDealChipData): void {
		buffer.setUint8( data.seatID );
			buffer.setUint8( data.notify ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvMoveDealChipData): void {
		data.seatID = buffer.getUint8();
			data.notify = buffer.getUint8() != 0;
			
	}
}
