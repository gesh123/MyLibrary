
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClGetCondPrizeLimitInfoData } from "../data/ClGetCondPrizeLimitInfoData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClGetCondPrizeLimitInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClGetCondPrizeLimitInfoData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint16( data.lowPlrsLimit );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClGetCondPrizeLimitInfoData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.lowPlrsLimit = buffer.getUint16();
			
	}
}
