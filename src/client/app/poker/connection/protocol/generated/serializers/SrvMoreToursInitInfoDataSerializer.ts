
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvMoreToursInitInfoData } from "../data/SrvMoreToursInitInfoData";
import { PokerMoreToursInitInfoData } from "../data/PokerMoreToursInitInfoData";

import { PokerMoreToursInitInfoDataSerializer } from "../serializers/PokerMoreToursInitInfoDataSerializer";



export class SrvMoreToursInitInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvMoreToursInitInfoData): void {
		PokerMoreToursInitInfoDataSerializer.serialize(buffer, data.moreToursInitInfo);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvMoreToursInitInfoData): void {
		data.moreToursInitInfo = new PokerMoreToursInitInfoData(data); 
                        PokerMoreToursInitInfoDataSerializer.deserialize(buffer, data.moreToursInitInfo);
			
	}
}
