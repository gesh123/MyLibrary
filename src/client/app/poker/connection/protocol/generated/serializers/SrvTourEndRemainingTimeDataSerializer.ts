
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourEndRemainingTimeData } from "../data/SrvTourEndRemainingTimeData";


export class SrvTourEndRemainingTimeDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourEndRemainingTimeData): void {
		buffer.setUint16( data.timeLeft );
			buffer.setUint16( data.timeTotal );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourEndRemainingTimeData): void {
		data.timeLeft = buffer.getUint16();
			data.timeTotal = buffer.getUint16();
			
	}
}
