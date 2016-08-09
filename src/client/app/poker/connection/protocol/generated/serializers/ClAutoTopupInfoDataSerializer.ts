
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClAutoTopupInfoData } from "../data/ClAutoTopupInfoData";


export class ClAutoTopupInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClAutoTopupInfoData): void {
		buffer.setUint8( data.enabled ? 1 : 0 );
			buffer.setUint8( data.topupType );
			buffer.setUint32( data.numBigBlinds );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClAutoTopupInfoData): void {
		data.enabled = buffer.getUint8() != 0;
			data.topupType = buffer.getUint8();
			data.numBigBlinds = buffer.getUint32();
			
	}
}
