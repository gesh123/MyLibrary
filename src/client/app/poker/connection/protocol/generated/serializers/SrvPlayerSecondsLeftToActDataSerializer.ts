
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvPlayerSecondsLeftToActData } from "../data/SrvPlayerSecondsLeftToActData";


export class SrvPlayerSecondsLeftToActDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvPlayerSecondsLeftToActData): void {
		buffer.setUint8( data.seatID );
			buffer.setUint8( data.secondsLeft );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvPlayerSecondsLeftToActData): void {
		data.seatID = buffer.getUint8();
			data.secondsLeft = buffer.getUint8();
			
	}
}
