
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourUnregisterResultData } from "../data/SrvTourUnregisterResultData";
import { ChooserData } from "../data/ChooserData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { ChooserDataSerializer } from "../serializers/ChooserDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvTourUnregisterResultDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourUnregisterResultData): void {
		buffer.setUint8( data.reason );
			BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			ChooserDataSerializer.serialize(buffer, data.chooser);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourUnregisterResultData): void {
		data.reason = buffer.getUint8();
			data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.chooser = new ChooserData(data); 
                        ChooserDataSerializer.deserialize(buffer, data.chooser);
			
	}
}
