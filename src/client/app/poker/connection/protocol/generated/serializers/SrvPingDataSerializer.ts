
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvPingData } from "../data/SrvPingData";


export class SrvPingDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvPingData): void {
		buffer.setUint8( data.inServer );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvPingData): void {
		data.inServer = buffer.getUint8();
			
	}
}
