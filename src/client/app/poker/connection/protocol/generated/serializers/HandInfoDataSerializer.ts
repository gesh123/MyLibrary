
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { HandInfoData } from "../data/HandInfoData";


export class HandInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: HandInfoData): void {
		buffer.setUint8( data.handKind );
			
            for (let i = 0, l = data.usedCards.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.usedCards[i];
				buffer.setUint8( temp );
            }
			
            for (let i = 0, l = data.unUsedCards.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.unUsedCards[i];
				buffer.setUint8( temp );
            }
			buffer.setUint8( data.encodeShowHandInfoFlag );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: HandInfoData): void {
		data.handKind = buffer.getUint8();
			
            data.usedCards = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = buffer.getUint8();
                data.usedCards.push( temp );
            }
			
            data.unUsedCards = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = buffer.getUint8();
                data.unUsedCards.push( temp );
            }
			data.encodeShowHandInfoFlag = buffer.getUint8();
			
	}
}
