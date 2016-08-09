
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClGetTourSeatInfoData } from "../data/ClGetTourSeatInfoData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClGetTourSeatInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClGetTourSeatInfoData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClGetTourSeatInfoData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			
	}
}
