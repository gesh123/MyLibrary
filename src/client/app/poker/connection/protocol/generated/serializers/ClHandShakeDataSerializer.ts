
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClHandShakeData } from "../data/ClHandShakeData";


export class ClHandShakeDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClHandShakeData): void {
		buffer.setUint32( data.protocolVersion );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClHandShakeData): void {
		data.protocolVersion = buffer.getUint32();
			
	}
}
