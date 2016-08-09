
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvRplHandHistoryData } from "../data/SrvRplHandHistoryData";


export class SrvRplHandHistoryDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvRplHandHistoryData): void {
		
            for (let i = 0, l = data.games.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.games[i];
				buffer.setUTF16StringNullTerminated( temp );
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvRplHandHistoryData): void {
		
            data.games = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = buffer.getUTF16StringNullTerminated();
                data.games.push( temp );
            }
			
	}
}
