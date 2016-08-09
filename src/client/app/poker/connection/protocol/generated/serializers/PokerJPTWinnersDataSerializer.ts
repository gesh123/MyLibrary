
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerJPTWinnersData } from "../data/PokerJPTWinnersData";
import { PokerJPTWinnerData } from "../data/PokerJPTWinnerData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerJPTWinnerDataSerializer } from "../serializers/PokerJPTWinnerDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class PokerJPTWinnersDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerJPTWinnersData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint32( data.version );
			
            for (let i = 0, l = data.winnersVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.winnersVect[i];
				PokerJPTWinnerDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerJPTWinnersData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.version = buffer.getUint32();
			
            data.winnersVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerJPTWinnerData(data);
                PokerJPTWinnerDataSerializer.deserialize(buffer, temp);
                data.winnersVect.push( temp );
            }
			
	}
}
