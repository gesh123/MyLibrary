
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerTournamentData } from "../data/PokerTournamentData";
import { PokerTournamentMoneyTypeData } from "../data/PokerTournamentMoneyTypeData";
import { PokerTimeData } from "../data/PokerTimeData";
import { PokerTournamentTypeData } from "../data/PokerTournamentTypeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTournamentMoneyTypeDataSerializer } from "../serializers/PokerTournamentMoneyTypeDataSerializer";
import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";
import { PokerTournamentTypeDataSerializer } from "../serializers/PokerTournamentTypeDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class PokerTournamentDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerTournamentData): void {
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
			PokerTimeDataSerializer.serialize(buffer, data.timeParts);
			buffer.setUint16( data.enrolled );
			buffer.setUint16( data.maxPlayers );
			buffer.setUint16( data.minPlayers );
			buffer.setUint16( data.curLevel );
			PokerTournamentTypeDataSerializer.serialize(buffer, data.tournamentType);
			buffer.setUint8( data.tournamentColor );
			bitsReader.setBits( data.tournamentStatus, 4 );
			bitsReader.setBits( data.seatsPerTable, 4 );
			bitsReader.setBits( data.tournamentTableType, 2 );
			bitsReader.setBits( data.rebuysAddonsType, 2 );
			bitsReader.setBits( data.tournamentSpeed, 4 );
			bitsReader.setBits( data.tourVisualType, 8 );
			bitsReader.setBit( data.isLocal );
			bitsReader.setBit( data.hasTemplateID );
			bitsReader.setBit( data.hideRanks );
			bitsReader.setBits( data.tourPasswordProtectionType, 2 );
			
            if (data.hasTemplateID == true){
                BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			
            }
			buffer.setUint8( data.maxReenters );
			
            if (data.maxReenters > 0){
                buffer.setUint16( data.reentered );
			
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerTournamentData): void {
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
			data.timeParts = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.timeParts);
			data.enrolled = buffer.getUint16();
			data.maxPlayers = buffer.getUint16();
			data.minPlayers = buffer.getUint16();
			data.curLevel = buffer.getUint16();
			data.tournamentType = new PokerTournamentTypeData(data); 
                        PokerTournamentTypeDataSerializer.deserialize(buffer, data.tournamentType);
			data.tournamentColor = buffer.getUint8();
			data.tournamentStatus = bitsReader.getBits( 4 );
			data.seatsPerTable = bitsReader.getBits( 4 );
			data.tournamentTableType = bitsReader.getBits( 2 );
			data.rebuysAddonsType = bitsReader.getBits( 2 );
			data.tournamentSpeed = bitsReader.getBits( 4 );
			data.tourVisualType = bitsReader.getBits( 8 );
			data.isLocal = bitsReader.getBit() != 0;
			data.hasTemplateID = bitsReader.getBit() != 0;
			data.hideRanks = bitsReader.getBit() != 0;
			data.tourPasswordProtectionType = bitsReader.getBits( 2 );
			
            if (data.hasTemplateID == true){
                data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			
            }
			data.maxReenters = buffer.getUint8();
			
            if (data.maxReenters > 0){
                data.reentered = buffer.getUint16();
			
            }
			
	}
}
