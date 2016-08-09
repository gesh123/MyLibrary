
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerJackpotTourCancelRegResultData } from "../data/PokerJackpotTourCancelRegResultData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PokerJackpotTourCancelRegResultDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerJackpotTourCancelRegResultData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			OptimizedBinaryNumberSerializer.serialize( buffer, data.amount );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerJackpotTourCancelRegResultData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.amount = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
