
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvSyncBreakInfoData } from "../data/SrvSyncBreakInfoData";


export class SrvSyncBreakInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvSyncBreakInfoData): void {
		buffer.setInt32( data.startBreaksInfo );
			buffer.setInt32( data.periodBreaksInfo );
			buffer.setInt32( data.durationBreaksInfo );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvSyncBreakInfoData): void {
		data.startBreaksInfo = buffer.getInt32();
			data.periodBreaksInfo = buffer.getInt32();
			data.durationBreaksInfo = buffer.getInt32();
			
	}
}
