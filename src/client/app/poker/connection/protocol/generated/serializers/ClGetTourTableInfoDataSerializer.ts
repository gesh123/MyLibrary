
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClGetTourTableInfoData } from "../data/ClGetTourTableInfoData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClGetTourTableInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClGetTourTableInfoData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClGetTourTableInfoData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			
	}
}
