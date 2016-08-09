
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvJackpotTourForceCancelRegRequestExData } from "../data/SrvJackpotTourForceCancelRegRequestExData";
import { PokerJackpotTourCancelRegResultData } from "../data/PokerJackpotTourCancelRegResultData";

import { PokerJackpotTourCancelRegResultDataSerializer } from "../serializers/PokerJackpotTourCancelRegResultDataSerializer";



export class SrvJackpotTourForceCancelRegRequestExDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourForceCancelRegRequestExData): void {
		PokerJackpotTourCancelRegResultDataSerializer.serialize(buffer, data.resultVO);
			buffer.setInt32( data.playerID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvJackpotTourForceCancelRegRequestExData): void {
		data.resultVO = new PokerJackpotTourCancelRegResultData(data); 
                        PokerJackpotTourCancelRegResultDataSerializer.deserialize(buffer, data.resultVO);
			data.playerID = buffer.getInt32();
			
	}
}
