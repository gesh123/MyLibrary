
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClSetAutoRebuysData } from "../data/ClSetAutoRebuysData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClSetAutoRebuysDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClSetAutoRebuysData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.rebuysCount );
			buffer.setUint32( data.tourMoneyPref );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClSetAutoRebuysData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.rebuysCount = buffer.getUint8();
			data.tourMoneyPref = buffer.getUint32();
			
	}
}
