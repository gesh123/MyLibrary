
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvJackpotTourRegRequestData } from "../data/SrvJackpotTourRegRequestData";
import { PokerJackpotTourRegResultData } from "../data/PokerJackpotTourRegResultData";

import { PokerJackpotTourRegResultDataSerializer } from "../serializers/PokerJackpotTourRegResultDataSerializer";



export class SrvJackpotTourRegRequestDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourRegRequestData): void {
		PokerJackpotTourRegResultDataSerializer.serialize(buffer, data.resultVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourRegRequestData): void {
		data.resultVO = new PokerJackpotTourRegResultData(data); 
                        PokerJackpotTourRegResultDataSerializer.deserialize(buffer, data.resultVO);
			
	}
}
