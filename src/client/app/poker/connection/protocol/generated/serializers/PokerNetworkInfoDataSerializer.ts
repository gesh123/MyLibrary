
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerNetworkInfoData } from "../data/PokerNetworkInfoData";
import { PokerServerLocationData } from "../data/PokerServerLocationData";

import { PokerServerLocationDataSerializer } from "../serializers/PokerServerLocationDataSerializer";



export class PokerNetworkInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerNetworkInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBits( data.networkID, 7 );
			bitsReader.setBit( data.hasInvalidFranchiseID );
			
            if (data.hasInvalidFranchiseID == false){
                buffer.setUint32( data.networkFranchiseID );
			
            }
			buffer.setUint8( data.networkCurrencyType );
			buffer.setInt16( data.timeZone );
			
            for (let i = 0, l = data.locationsVect.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.locationsVect[i];
				PokerServerLocationDataSerializer.serialize(buffer, temp);
            }
			buffer.setUint16( data.cpRate );
			buffer.setFloat64( data.tbRate );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerNetworkInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.networkID = bitsReader.getBits( 7 );
			data.hasInvalidFranchiseID = bitsReader.getBit() != 0;
			
            if (data.hasInvalidFranchiseID == false){
                data.networkFranchiseID = buffer.getUint32();
			
            }
			data.networkCurrencyType = buffer.getUint8();
			data.timeZone = buffer.getInt16();
			
            data.locationsVect = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = new PokerServerLocationData(data);
                PokerServerLocationDataSerializer.deserialize(buffer, temp);
                data.locationsVect.push( temp );
            }
			data.cpRate = buffer.getUint16();
			data.tbRate = buffer.getFloat64();
			
	}
}
