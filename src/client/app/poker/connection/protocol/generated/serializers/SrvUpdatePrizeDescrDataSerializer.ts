
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUpdatePrizeDescrData } from "../data/SrvUpdatePrizeDescrData";
import { PokerPrizeSchemeInfoRowData } from "../data/PokerPrizeSchemeInfoRowData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerPrizeSchemeInfoRowDataSerializer } from "../serializers/PokerPrizeSchemeInfoRowDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvUpdatePrizeDescrDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUpdatePrizeDescrData): void {
		buffer.setUint8( data.inPercent ? 1 : 0 );
			
            for (let i = 0, l = data.prizeSchemeInfos.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.prizeSchemeInfos[i];
				PokerPrizeSchemeInfoRowDataSerializer.serialize(buffer, temp);
            }
			BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint32( data.prizeVersion );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUpdatePrizeDescrData): void {
		data.inPercent = buffer.getUint8() != 0;
			
            data.prizeSchemeInfos = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerPrizeSchemeInfoRowData(data);
                PokerPrizeSchemeInfoRowDataSerializer.deserialize(buffer, temp);
                data.prizeSchemeInfos.push( temp );
            }
			data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.prizeVersion = buffer.getUint32();
			
	}
}
