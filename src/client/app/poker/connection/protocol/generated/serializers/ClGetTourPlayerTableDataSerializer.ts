
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClGetTourPlayerTableData } from "../data/ClGetTourPlayerTableData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClGetTourPlayerTableDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClGetTourPlayerTableData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint16( data.playerID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClGetTourPlayerTableData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.playerID = buffer.getUint16();
			
	}
}
