
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvRemainingUnitsTillTourEndData } from "../data/SrvRemainingUnitsTillTourEndData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvRemainingUnitsTillTourEndDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvRemainingUnitsTillTourEndData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint32( data.remainingUnits );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvRemainingUnitsTillTourEndData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.remainingUnits = buffer.getUint32();
			
	}
}
