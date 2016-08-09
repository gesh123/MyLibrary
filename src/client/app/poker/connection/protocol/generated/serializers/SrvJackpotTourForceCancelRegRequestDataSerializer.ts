
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvJackpotTourForceCancelRegRequestData } from "../data/SrvJackpotTourForceCancelRegRequestData";
import { PokerJackpotTourCancelRegResultData } from "../data/PokerJackpotTourCancelRegResultData";

import { PokerJackpotTourCancelRegResultDataSerializer } from "../serializers/PokerJackpotTourCancelRegResultDataSerializer";



export class SrvJackpotTourForceCancelRegRequestDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourForceCancelRegRequestData): void {
		PokerJackpotTourCancelRegResultDataSerializer.serialize(buffer, data.resultVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourForceCancelRegRequestData): void {
		data.resultVO = new PokerJackpotTourCancelRegResultData(data); 
                        PokerJackpotTourCancelRegResultDataSerializer.deserialize(buffer, data.resultVO);
			
	}
}
