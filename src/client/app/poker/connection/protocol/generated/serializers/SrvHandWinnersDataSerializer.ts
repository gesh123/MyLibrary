
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvHandWinnersData } from "../data/SrvHandWinnersData";
import { GameWinnerHandData } from "../data/GameWinnerHandData";

import { GameWinnerHandDataSerializer } from "../serializers/GameWinnerHandDataSerializer";



export class SrvHandWinnersDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvHandWinnersData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBits( data.winnersVectorSize, 7 );
			bitsReader.setBit( data.evalLowHands );
			
            for (let i = 0, l = data.winnersVector.length ; i < l; i++){
                let temp = data.winnersVector[i];
				GameWinnerHandDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvHandWinnersData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.winnersVectorSize = bitsReader.getBits( 7 );
			data.evalLowHands = bitsReader.getBit() != 0;
			
            data.winnersVector = []; 
            for (let i = 0, l = data.winnersVectorSize; i < l; i++){
                let temp = new GameWinnerHandData(data);
                GameWinnerHandDataSerializer.deserialize(buffer, temp);
                data.winnersVector.push( temp );
            }
			
	}
}
