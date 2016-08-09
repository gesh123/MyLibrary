
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourEndRemainingHandsUpdateData } from "../data/SrvTourEndRemainingHandsUpdateData";


export class SrvTourEndRemainingHandsUpdateDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourEndRemainingHandsUpdateData): void {
		buffer.setUint32( data.hands );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourEndRemainingHandsUpdateData): void {
		data.hands = buffer.getUint32();
			
	}
}
