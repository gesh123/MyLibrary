
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerJPTData } from "../data/PokerJPTData";
import { PokerTournamentMoneyTypeData } from "../data/PokerTournamentMoneyTypeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTournamentMoneyTypeDataSerializer } from "../serializers/PokerTournamentMoneyTypeDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class PokerJPTDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerJPTData): void {
		var bitsReader = new BitsReader( buffer );
		
			BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUTF16StringNullTerminated( data.tournamentName );
			bitsReader.setBit( data.hasBuyInInfo );
			bitsReader.setBit( data.hasFeeInfo );
			bitsReader.setBit( data.hasBountyInfo );
			bitsReader.setBit( data.hasBeastFeeInfo );
			bitsReader.setBits( data.pointsType, 3 );
			bitsReader.setBit( data.isRealMoney );
			
            if (data.hasBuyInInfo == true){
                PokerTournamentMoneyTypeDataSerializer.serialize(buffer, data.buyInInfo);
			
            }
			
            if (data.hasFeeInfo == true){
                PokerTournamentMoneyTypeDataSerializer.serialize(buffer, data.feeInfo);
			
            }
			
            if (data.hasBountyInfo == true){
                PokerTournamentMoneyTypeDataSerializer.serialize(buffer, data.bountyInfo);
			
            }
			
            if (data.hasBeastFeeInfo == true){
                PokerTournamentMoneyTypeDataSerializer.serialize(buffer, data.beastInfo);
			
            }
			buffer.setUint8( data.serverID );
			buffer.setUint8( data.networkID );
			buffer.setUint16( data.limit );
			buffer.setUint8( data.gameTypeIDShort );
			buffer.setUint32( data.lastTournamentsAverageDuration );
			
            for (let i = 0, l = data.buyInMultipliersVect.length , t = buffer.setUint8( l ); i < l; i++){
                let temp = data.buyInMultipliersVect[i];
				buffer.setUint16( temp );
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerJPTData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.tournamentName = buffer.getUTF16StringNullTerminated();
			data.hasBuyInInfo = bitsReader.getBit() != 0;
			data.hasFeeInfo = bitsReader.getBit() != 0;
			data.hasBountyInfo = bitsReader.getBit() != 0;
			data.hasBeastFeeInfo = bitsReader.getBit() != 0;
			data.pointsType = bitsReader.getBits( 3 );
			data.isRealMoney = bitsReader.getBit() != 0;
			
            if (data.hasBuyInInfo == true){
                data.buyInInfo = new PokerTournamentMoneyTypeData(data); 
                        PokerTournamentMoneyTypeDataSerializer.deserialize(buffer, data.buyInInfo);
			
            }
			
            if (data.hasFeeInfo == true){
                data.feeInfo = new PokerTournamentMoneyTypeData(data); 
                        PokerTournamentMoneyTypeDataSerializer.deserialize(buffer, data.feeInfo);
			
            }
			
            if (data.hasBountyInfo == true){
                data.bountyInfo = new PokerTournamentMoneyTypeData(data); 
                        PokerTournamentMoneyTypeDataSerializer.deserialize(buffer, data.bountyInfo);
			
            }
			
            if (data.hasBeastFeeInfo == true){
                data.beastInfo = new PokerTournamentMoneyTypeData(data); 
                        PokerTournamentMoneyTypeDataSerializer.deserialize(buffer, data.beastInfo);
			
            }
			data.serverID = buffer.getUint8();
			data.networkID = buffer.getUint8();
			data.limit = buffer.getUint16();
			data.gameTypeIDShort = buffer.getUint8();
			data.lastTournamentsAverageDuration = buffer.getUint32();
			
            data.buyInMultipliersVect = []; 
            for (let i = 0, l = buffer.getUint8(); i < l; i++){
                let temp = buffer.getUint16();
                data.buyInMultipliersVect.push( temp );
            }
			
	}
}
