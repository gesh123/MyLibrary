
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerExtraMoneyResponseData } from "../data/PokerExtraMoneyResponseData";


export class PokerExtraMoneyResponseDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerExtraMoneyResponseData): void {
		buffer.setUint16( data.rebuyLeft );
			buffer.setUint8( data.reason );
			buffer.setUint8( data.requestType );
			buffer.setUint8( data.conditionInfo ? 1 : 0 );
			
            if (data.requestType == 1){
                buffer.setUint8( data.successfulRebuys );
			buffer.setUint8( data.unsuccessfulRebuys );
			
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerExtraMoneyResponseData): void {
		data.rebuyLeft = buffer.getUint16();
			data.reason = buffer.getUint8();
			data.requestType = buffer.getUint8();
			data.conditionInfo = buffer.getUint8() != 0;
			
            if (data.requestType == 1){
                data.successfulRebuys = buffer.getUint8();
			data.unsuccessfulRebuys = buffer.getUint8();
			
            }
			
	}
}
