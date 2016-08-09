
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvJackpotTourCancelRegRequestData } from "../data/SrvJackpotTourCancelRegRequestData";
import { PokerJackpotTourCancelRegResultData } from "../data/PokerJackpotTourCancelRegResultData";

import { PokerJackpotTourCancelRegResultDataSerializer } from "../serializers/PokerJackpotTourCancelRegResultDataSerializer";



export class SrvJackpotTourCancelRegRequestDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourCancelRegRequestData): void {
		PokerJackpotTourCancelRegResultDataSerializer.serialize(buffer, data.resultVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourCancelRegRequestData): void {
		data.resultVO = new PokerJackpotTourCancelRegResultData(data); 
                        PokerJackpotTourCancelRegResultDataSerializer.deserialize(buffer, data.resultVO);
			
	}
}
