
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvCatchThisNumberData } from "../data/SrvCatchThisNumberData";


export class SrvCatchThisNumberDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvCatchThisNumberData): void {
		buffer.setUint32( data.number );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvCatchThisNumberData): void {
		data.number = buffer.getUint32();
			
	}
}
