
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourSmallestStackData } from "../data/SrvTourSmallestStackData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvTourSmallestStackDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourSmallestStackData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			OptimizedBinaryNumberSerializer.serialize( buffer, data.smallestStack );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourSmallestStackData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.smallestStack = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
