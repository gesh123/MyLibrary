
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { HardwareInfoData } from "../data/HardwareInfoData";


export class HardwareInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: HardwareInfoData): void {
		
            for (let i = 0, l = data.MACsVect.length , t = buffer.setUint32( l ); i < l; i++){
                let temp = data.MACsVect[i];
				buffer.setUTF16StringNullTerminated( temp );
            }
			
            for (let i = 0, l = data.HDDIDsVect.length , t = buffer.setUint32( l ); i < l; i++){
                let temp = data.HDDIDsVect[i];
				buffer.setUTF16StringNullTerminated( temp );
            }
			buffer.setUTF16StringNullTerminated( data.GUIDs );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: HardwareInfoData): void {
		
            data.MACsVect = []; 
            for (let i = 0, l = buffer.getUint32(); i < l; i++){
                let temp = buffer.getUTF16StringNullTerminated();
                data.MACsVect.push( temp );
            }
			
            data.HDDIDsVect = []; 
            for (let i = 0, l = buffer.getUint32(); i < l; i++){
                let temp = buffer.getUTF16StringNullTerminated();
                data.HDDIDsVect.push( temp );
            }
			data.GUIDs = buffer.getUTF16StringNullTerminated();
			
	}
}
