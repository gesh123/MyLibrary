
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClExtraChipsPrefChangedData } from "../data/ClExtraChipsPrefChangedData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClExtraChipsPrefChangedDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClExtraChipsPrefChangedData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.tourMoneyPref );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClExtraChipsPrefChangedData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.tourMoneyPref = buffer.getUint8();
			
	}
}
