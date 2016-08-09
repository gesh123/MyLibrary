
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourSittingOutPlayersData } from "../data/SrvTourSittingOutPlayersData";


export class SrvTourSittingOutPlayersDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourSittingOutPlayersData): void {
		
            for (let i = 0, l = data.seats.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.seats[i];
				buffer.setUint8( temp );
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourSittingOutPlayersData): void {
		
            data.seats = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = buffer.getUint8();
                data.seats.push( temp );
            }
			
	}
}
