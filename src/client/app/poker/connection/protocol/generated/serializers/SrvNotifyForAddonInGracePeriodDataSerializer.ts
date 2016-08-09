
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvNotifyForAddonInGracePeriodData } from "../data/SrvNotifyForAddonInGracePeriodData";


export class SrvNotifyForAddonInGracePeriodDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvNotifyForAddonInGracePeriodData): void {
		buffer.setUint8( data.seatID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvNotifyForAddonInGracePeriodData): void {
		data.seatID = buffer.getUint8();
			
	}
}
