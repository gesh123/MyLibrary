
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerJackpotTourRegResultData } from "../data/PokerJackpotTourRegResultData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class PokerJackpotTourRegResultDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerJackpotTourRegResultData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.resultID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerJackpotTourRegResultData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.resultID = buffer.getUint8();
			
	}
}
