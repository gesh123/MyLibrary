
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerMoreToursInitInfoData } from "../data/PokerMoreToursInitInfoData";
import { PokerBreaksInfoData } from "../data/PokerBreaksInfoData";
import { PokerLimitsInfoData } from "../data/PokerLimitsInfoData";
import { PokerPrizeSchemeInfoRowData } from "../data/PokerPrizeSchemeInfoRowData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerBreaksInfoDataSerializer } from "../serializers/PokerBreaksInfoDataSerializer";
import { PokerLimitsInfoDataSerializer } from "../serializers/PokerLimitsInfoDataSerializer";
import { PokerPrizeSchemeInfoRowDataSerializer } from "../serializers/PokerPrizeSchemeInfoRowDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PokerMoreToursInitInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerMoreToursInitInfoData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint32( data.breaksVersion );
			buffer.setUint32( data.limitsVersion );
			PokerBreaksInfoDataSerializer.serialize(buffer, data.breaksInfo);
			
            for (let i = 0, l = data.limitsInfos.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.limitsInfos[i];
				PokerLimitsInfoDataSerializer.serialize(buffer, temp);
            }
			buffer.setUint8( data.inPercent ? 1 : 0 );
			
            for (let i = 0, l = data.prizeSchemeInfos.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.prizeSchemeInfos[i];
				PokerPrizeSchemeInfoRowDataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.playerLimitsVec.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.playerLimitsVec[i];
				buffer.setUint16( temp );
            }
			buffer.setUint16( data.schemePlayerLimit );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.startingChips );
			buffer.setUint16( data.minPlayers );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerMoreToursInitInfoData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.breaksVersion = buffer.getUint32();
			data.limitsVersion = buffer.getUint32();
			data.breaksInfo = new PokerBreaksInfoData(data); 
                        PokerBreaksInfoDataSerializer.deserialize(buffer, data.breaksInfo);
			
            data.limitsInfos = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerLimitsInfoData(data);
                PokerLimitsInfoDataSerializer.deserialize(buffer, temp);
                data.limitsInfos.push( temp );
            }
			data.inPercent = buffer.getUint8() != 0;
			
            data.prizeSchemeInfos = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerPrizeSchemeInfoRowData(data);
                PokerPrizeSchemeInfoRowDataSerializer.deserialize(buffer, temp);
                data.prizeSchemeInfos.push( temp );
            }
			
            data.playerLimitsVec = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = buffer.getUint16();
                data.playerLimitsVec.push( temp );
            }
			data.schemePlayerLimit = buffer.getUint16();
			data.startingChips = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.minPlayers = buffer.getUint16();
			
	}
}
