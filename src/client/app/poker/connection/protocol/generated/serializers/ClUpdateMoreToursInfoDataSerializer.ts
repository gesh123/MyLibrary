
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClUpdateMoreToursInfoData } from "../data/ClUpdateMoreToursInfoData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClUpdateMoreToursInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClUpdateMoreToursInfoData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint32( data.breaksVersion );
			buffer.setUint32( data.limitsVersion );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClUpdateMoreToursInfoData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.breaksVersion = buffer.getUint32();
			data.limitsVersion = buffer.getUint32();
			
	}
}
