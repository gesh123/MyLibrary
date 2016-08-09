
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClGetTourDetailsData } from "../data/ClGetTourDetailsData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClGetTourDetailsDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClGetTourDetailsData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint32( data.infoVersion );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClGetTourDetailsData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.infoVersion = buffer.getUint32();
			
	}
}
