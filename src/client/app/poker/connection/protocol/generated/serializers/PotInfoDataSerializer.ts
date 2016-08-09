
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PotInfoData } from "../data/PotInfoData";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PotInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PotInfoData): void {
		
            for (let i = 0, l = data.pots.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.pots[i];
				OptimizedBinaryNumberSerializer.serialize( buffer, temp );
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PotInfoData): void {
		
            data.pots = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = OptimizedBinaryNumberSerializer.deserialize( buffer )
                data.pots.push( temp );
            }
			
	}
}
