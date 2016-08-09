
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourEndRemainingHandsData } from "../data/SrvTourEndRemainingHandsData";


export class SrvTourEndRemainingHandsDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourEndRemainingHandsData): void {
		buffer.setUint32( data.hands );
			buffer.setUint32( data.handsTotal );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourEndRemainingHandsData): void {
		data.hands = buffer.getUint32();
			data.handsTotal = buffer.getUint32();
			
	}
}
