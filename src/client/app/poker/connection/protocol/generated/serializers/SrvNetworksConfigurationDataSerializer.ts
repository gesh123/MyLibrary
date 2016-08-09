
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvNetworksConfigurationData } from "../data/SrvNetworksConfigurationData";
import { PokerNetworkInfoData } from "../data/PokerNetworkInfoData";

import { PokerNetworkInfoDataSerializer } from "../serializers/PokerNetworkInfoDataSerializer";



export class SrvNetworksConfigurationDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvNetworksConfigurationData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBits( data.networkConfigLength, 7 );
			bitsReader.setBit( data.resetAll );
			
            for (let i = 0, l = data.networkConfigVect.length ; i < l; i++){
                let temp = data.networkConfigVect[i];
				PokerNetworkInfoDataSerializer.serialize(buffer, temp);
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvNetworksConfigurationData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.networkConfigLength = bitsReader.getBits( 7 );
			data.resetAll = bitsReader.getBit() != 0;
			
            data.networkConfigVect = []; 
            for (let i = 0, l = data.networkConfigLength; i < l; i++){
                let temp = new PokerNetworkInfoData(data);
                PokerNetworkInfoDataSerializer.deserialize(buffer, temp);
                data.networkConfigVect.push( temp );
            }
			
	}
}
