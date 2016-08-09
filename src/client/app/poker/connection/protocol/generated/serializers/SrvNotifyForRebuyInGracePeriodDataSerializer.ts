
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvNotifyForRebuyInGracePeriodData } from "../data/SrvNotifyForRebuyInGracePeriodData";


export class SrvNotifyForRebuyInGracePeriodDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvNotifyForRebuyInGracePeriodData): void {
		buffer.setUint8( data.seatID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvNotifyForRebuyInGracePeriodData): void {
		data.seatID = buffer.getUint8();
			
	}
}
