
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClMoveMe2MyTableData } from "../data/ClMoveMe2MyTableData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClMoveMe2MyTableDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClMoveMe2MyTableData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClMoveMe2MyTableData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			
	}
}
