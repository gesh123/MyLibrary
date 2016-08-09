
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvBackOnSeatOkData } from "../data/SrvBackOnSeatOkData";


export class SrvBackOnSeatOkDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvBackOnSeatOkData): void {
		buffer.setUint8( data.userSeatID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvBackOnSeatOkData): void {
		data.userSeatID = buffer.getUint8();
			
	}
}
