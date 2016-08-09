
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvCanObserveTourTemplateTableData } from "../data/SrvCanObserveTourTemplateTableData";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvCanObserveTourTemplateTableDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvCanObserveTourTemplateTableData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.canObserveTourTemplateTable ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvCanObserveTourTemplateTableData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.canObserveTourTemplateTable = buffer.getUint8() != 0;
			
	}
}
