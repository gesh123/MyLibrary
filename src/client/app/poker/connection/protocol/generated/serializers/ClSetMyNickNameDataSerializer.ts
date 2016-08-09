
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClSetMyNickNameData } from "../data/ClSetMyNickNameData";
import { HardwareInfoData } from "../data/HardwareInfoData";

import { HardwareInfoDataSerializer } from "../serializers/HardwareInfoDataSerializer";



export class ClSetMyNickNameDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClSetMyNickNameData): void {
		buffer.setUTF16StringNullTerminated( data.username );
			buffer.setUTF16StringNullTerminated( data.passwordHash );
			buffer.setUTF16StringNullTerminated( data.nickname );
			buffer.setUint8( data.isHardwareInfoAvailable ? 1 : 0 );
			
            if (data.isHardwareInfoAvailable == true){
                HardwareInfoDataSerializer.serialize(buffer, data.hardwareInfo);
			
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClSetMyNickNameData): void {
		data.username = buffer.getUTF16StringNullTerminated();
			data.passwordHash = buffer.getUTF16StringNullTerminated();
			data.nickname = buffer.getUTF16StringNullTerminated();
			data.isHardwareInfoAvailable = buffer.getUint8() != 0;
			
            if (data.isHardwareInfoAvailable == true){
                data.hardwareInfo = new HardwareInfoData(data); 
                        HardwareInfoDataSerializer.deserialize(buffer, data.hardwareInfo);
			
            }
			
	}
}
