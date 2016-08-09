
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUpdateWinnerPlacesCountData } from "../data/SrvUpdateWinnerPlacesCountData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvUpdateWinnerPlacesCountDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUpdateWinnerPlacesCountData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint16( data.winnerPlacesCount );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUpdateWinnerPlacesCountData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.winnerPlacesCount = buffer.getUint16();
			
	}
}
