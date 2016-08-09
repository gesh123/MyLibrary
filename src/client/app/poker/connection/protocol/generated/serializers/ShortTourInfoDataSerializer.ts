
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ShortTourInfoData } from "../data/ShortTourInfoData";
import { PokerTournamentMoneyTypeData } from "../data/PokerTournamentMoneyTypeData";
import { PokerTimeData } from "../data/PokerTimeData";
import { PokerTournamentTypeData } from "../data/PokerTournamentTypeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTournamentMoneyTypeDataSerializer } from "../serializers/PokerTournamentMoneyTypeDataSerializer";
import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";
import { PokerTournamentTypeDataSerializer } from "../serializers/PokerTournamentTypeDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ShortTourInfoDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ShortTourInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
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
			buffer.setUint16( data.limit );
			PokerTimeDataSerializer.serialize(buffer, data.timeParts);
			buffer.setUint16( data.enrolled );
			buffer.setUint16( data.maxPlayers );
			buffer.setUint16( data.minPlayers );
			buffer.setUint16( data.curLevel );
			bitsReader.setBits( data.tournamentStatus, 4 );
			bitsReader.setBits( data.seatsPerTable, 4 );
			PokerTournamentTypeDataSerializer.serialize(buffer, data.tournamentType);
			buffer.setUint8( data.tournamentColor );
			buffer.setUint8( data.maxReenters );
			
            if (data.maxReenters > 0){
                buffer.setUint16( data.reentered );
			
            }
			buffer.setUint8( data.hideRanks ? 1 : 0 );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ShortTourInfoData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
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
			data.limit = buffer.getUint16();
			data.timeParts = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.timeParts);
			data.enrolled = buffer.getUint16();
			data.maxPlayers = buffer.getUint16();
			data.minPlayers = buffer.getUint16();
			data.curLevel = buffer.getUint16();
			data.tournamentStatus = bitsReader.getBits( 4 );
			data.seatsPerTable = bitsReader.getBits( 4 );
			data.tournamentType = new PokerTournamentTypeData(data); 
                        PokerTournamentTypeDataSerializer.deserialize(buffer, data.tournamentType);
			data.tournamentColor = buffer.getUint8();
			data.maxReenters = buffer.getUint8();
			
            if (data.maxReenters > 0){
                data.reentered = buffer.getUint16();
			
            }
			data.hideRanks = buffer.getUint8() != 0;
			
	}
}
