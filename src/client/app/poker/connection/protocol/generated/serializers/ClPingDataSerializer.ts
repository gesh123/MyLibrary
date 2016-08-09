
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClPingData } from "../data/ClPingData";
import { InfoData } from "../data/InfoData";

import { InfoDataSerializer } from "../serializers/InfoDataSerializer";



export class ClPingDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClPingData): void {
		InfoDataSerializer.serialize(buffer, data.info);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClPingData): void {
		data.info = new InfoData(data); 
                        InfoDataSerializer.deserialize(buffer, data.info);
			
	}
}
