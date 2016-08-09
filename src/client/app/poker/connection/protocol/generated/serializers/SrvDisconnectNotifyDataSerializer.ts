
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvDisconnectNotifyData } from "../data/SrvDisconnectNotifyData";


export class SrvDisconnectNotifyDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvDisconnectNotifyData): void {
		buffer.setUint8( data.seatID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvDisconnectNotifyData): void {
		data.seatID = buffer.getUint8();
			
	}
}
