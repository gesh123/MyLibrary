
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvSitOkData } from "../data/SrvSitOkData";


export class SrvSitOkDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvSitOkData): void {
		buffer.setUint8( data.userSeatID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvSitOkData): void {
		data.userSeatID = buffer.getUint8();
			
	}
}
