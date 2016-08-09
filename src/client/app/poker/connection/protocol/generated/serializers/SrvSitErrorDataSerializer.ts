
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvSitErrorData } from "../data/SrvSitErrorData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvSitErrorDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvSitErrorData): void {
		buffer.setUint32( data.errorCode );
			buffer.setUint8( data.writeMoneyFlag ? 1 : 0 );
			
            if (data.writeMoneyFlag == true){
                OptimizedBinaryNumberSerializer.serialize( buffer, data.money );
			
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvSitErrorData): void {
		data.errorCode = buffer.getUint32();
			data.writeMoneyFlag = buffer.getUint8() != 0;
			
            if (data.writeMoneyFlag == true){
                data.money = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
            }
			
	}
}
