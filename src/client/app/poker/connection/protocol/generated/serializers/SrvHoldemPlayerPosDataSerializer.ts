
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvHoldemPlayerPosData } from "../data/SrvHoldemPlayerPosData";


export class SrvHoldemPlayerPosDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvHoldemPlayerPosData): void {
		buffer.setUint8( data.playerPosition );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvHoldemPlayerPosData): void {
		data.playerPosition = buffer.getUint8();
			
	}
}
