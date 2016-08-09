
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { TableStateUpdateData } from "../data/TableStateUpdateData";


export class TableStateUpdateDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: TableStateUpdateData): void {
		buffer.setUint8( data.seatID );
			buffer.setUint8( data.notify ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: TableStateUpdateData): void {
		data.seatID = buffer.getUint8();
			data.notify = buffer.getUint8() != 0;
			
	}
}
