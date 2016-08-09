
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClSetAutoAddonData } from "../data/ClSetAutoAddonData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClSetAutoAddonDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClSetAutoAddonData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.addonCount );
			
            if (data.addonCount > 0){
                buffer.setUint8( data.tourMoneyPref );
			
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClSetAutoAddonData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.addonCount = buffer.getUint8();
			
            if (data.addonCount > 0){
                data.tourMoneyPref = buffer.getUint8();
			
            }
			
	}
}
