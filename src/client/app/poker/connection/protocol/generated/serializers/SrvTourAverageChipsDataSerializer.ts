
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourAverageChipsData } from "../data/SrvTourAverageChipsData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvTourAverageChipsDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourAverageChipsData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			OptimizedBinaryNumberSerializer.serialize( buffer, data.averageChips );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourAverageChipsData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.averageChips = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
