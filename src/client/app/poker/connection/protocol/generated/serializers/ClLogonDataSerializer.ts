
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClLogonData } from "../data/ClLogonData";
import { HardwareInfoData } from "../data/HardwareInfoData";

import { HardwareInfoDataSerializer } from "../serializers/HardwareInfoDataSerializer";



export class ClLogonDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClLogonData): void {
		buffer.setUTF16StringNullTerminated( data.username );
			buffer.setUTF16StringNullTerminated( data.password );
			buffer.setUint8( data.passwordHashed ? 1 : 0 );
			buffer.setUint8( data.isHardwareInfoAvailable ? 1 : 0 );
			
            if (data.isHardwareInfoAvailable == true){
                HardwareInfoDataSerializer.serialize(buffer, data.hardwareInfo);
			
            }
			buffer.setUint8( data.checkPlayMoneyMessage ? 1 : 0 );
			buffer.setUint8( data.logonType );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClLogonData): void {
		data.username = buffer.getUTF16StringNullTerminated();
			data.password = buffer.getUTF16StringNullTerminated();
			data.passwordHashed = buffer.getUint8() != 0;
			data.isHardwareInfoAvailable = buffer.getUint8() != 0;
			
            if (data.isHardwareInfoAvailable == true){
                data.hardwareInfo = new HardwareInfoData(data); 
                        HardwareInfoDataSerializer.deserialize(buffer, data.hardwareInfo);
			
            }
			data.checkPlayMoneyMessage = buffer.getUint8() != 0;
			data.logonType = buffer.getUint8();
			
	}
}
