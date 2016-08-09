
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvTourQualifiersData } from "../data/SrvTourQualifiersData";
import { PokerTourUpdateQualifiersData } from "../data/PokerTourUpdateQualifiersData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTourUpdateQualifiersDataSerializer } from "../serializers/PokerTourUpdateQualifiersDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvTourQualifiersDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvTourQualifiersData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint32( data.version );
			
            for (let i = 0, l = data.addedToursVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.addedToursVect[i];
				PokerTourUpdateQualifiersDataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.changedToursVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.changedToursVect[i];
				PokerTourUpdateQualifiersDataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.removedToursVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.removedToursVect[i];
				BinaryNetworkIDSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvTourQualifiersData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.version = buffer.getUint32();
			
            data.addedToursVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerTourUpdateQualifiersData(data);
                PokerTourUpdateQualifiersDataSerializer.deserialize(buffer, temp);
                data.addedToursVect.push( temp );
            }
			
            data.changedToursVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerTourUpdateQualifiersData(data);
                PokerTourUpdateQualifiersDataSerializer.deserialize(buffer, temp);
                data.changedToursVect.push( temp );
            }
			
            data.removedToursVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new BinaryNetworkID(data);
                BinaryNetworkIDSerializer.deserialize(buffer, temp);
                data.removedToursVect.push( temp );
            }
			
	}
}
