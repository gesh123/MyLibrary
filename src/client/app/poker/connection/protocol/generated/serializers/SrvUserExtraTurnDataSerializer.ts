
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUserExtraTurnData } from "../data/SrvUserExtraTurnData";
import { TurnOptionsData } from "../data/TurnOptionsData";

import { TurnOptionsDataSerializer } from "../serializers/TurnOptionsDataSerializer";



export class SrvUserExtraTurnDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUserExtraTurnData): void {
		buffer.setUint8( data.seatID );
			buffer.setUint8( data.notify ? 1 : 0 );
			TurnOptionsDataSerializer.serialize(buffer, data.turnOptions);
			buffer.setUint16( data.timeOut );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUserExtraTurnData): void {
		data.seatID = buffer.getUint8();
			data.notify = buffer.getUint8() != 0;
			data.turnOptions = new TurnOptionsData(data); 
                        TurnOptionsDataSerializer.deserialize(buffer, data.turnOptions);
			data.timeOut = buffer.getUint16();
			
	}
}
