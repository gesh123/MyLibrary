
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourPlayerBackOnTableData } from "../data/SrvTourPlayerBackOnTableData";


export class SrvTourPlayerBackOnTableDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourPlayerBackOnTableData): void {
		buffer.setUint8( data.seatID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourPlayerBackOnTableData): void {
		data.seatID = buffer.getUint8();
			
	}
}
