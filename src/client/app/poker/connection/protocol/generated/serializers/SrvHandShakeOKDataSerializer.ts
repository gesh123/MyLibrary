
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvHandShakeOKData } from "../data/SrvHandShakeOKData";


export class SrvHandShakeOKDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvHandShakeOKData): void {
		buffer.setUint8( data.inactivityTimeoutSecconds );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvHandShakeOKData): void {
		data.inactivityTimeoutSecconds = buffer.getUint8();
			
	}
}
