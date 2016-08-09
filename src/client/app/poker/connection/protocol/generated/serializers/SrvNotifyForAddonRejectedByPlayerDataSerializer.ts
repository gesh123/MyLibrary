
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvNotifyForAddonRejectedByPlayerData } from "../data/SrvNotifyForAddonRejectedByPlayerData";


export class SrvNotifyForAddonRejectedByPlayerDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvNotifyForAddonRejectedByPlayerData): void {
		buffer.setUint8( data.seatID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvNotifyForAddonRejectedByPlayerData): void {
		data.seatID = buffer.getUint8();
			
	}
}
