
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClSitDownData } from "../data/ClSitDownData";
import { MoneyAndFeeInCompointsData } from "../data/MoneyAndFeeInCompointsData";

import { MoneyAndFeeInCompointsDataSerializer } from "../serializers/MoneyAndFeeInCompointsDataSerializer";

import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class ClSitDownDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClSitDownData): void {
		buffer.setUint8( data.seatID );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.playerMoney );
			MoneyAndFeeInCompointsDataSerializer.serialize(buffer, data.moneyAndFeeInCompoints);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClSitDownData): void {
		data.seatID = buffer.getUint8();
			data.playerMoney = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.moneyAndFeeInCompoints = new MoneyAndFeeInCompointsData(data); 
                        MoneyAndFeeInCompointsDataSerializer.deserialize(buffer, data.moneyAndFeeInCompoints);
			
	}
}
