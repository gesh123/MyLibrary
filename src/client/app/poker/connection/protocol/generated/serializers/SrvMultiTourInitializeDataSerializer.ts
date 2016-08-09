
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvMultiTourInitializeData } from "../data/SrvMultiTourInitializeData";
import { PokerTableInfoData } from "../data/PokerTableInfoData";
import { PokerTournamentPlayerInfoData } from "../data/PokerTournamentPlayerInfoData";
import { PokerTournamentPlayerInfo1Data } from "../data/PokerTournamentPlayerInfo1Data";
import { PokerPrizeSchemeInfoRowData } from "../data/PokerPrizeSchemeInfoRowData";
import { PokerTourTimeInfoData } from "../data/PokerTourTimeInfoData";
import { PokerTourLimitInfoData } from "../data/PokerTourLimitInfoData";
import { PokerTimeData } from "../data/PokerTimeData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTableInfoDataSerializer } from "../serializers/PokerTableInfoDataSerializer";
import { PokerTournamentPlayerInfoDataSerializer } from "../serializers/PokerTournamentPlayerInfoDataSerializer";
import { PokerTournamentPlayerInfo1DataSerializer } from "../serializers/PokerTournamentPlayerInfo1DataSerializer";
import { PokerPrizeSchemeInfoRowDataSerializer } from "../serializers/PokerPrizeSchemeInfoRowDataSerializer";
import { PokerTourTimeInfoDataSerializer } from "../serializers/PokerTourTimeInfoDataSerializer";
import { PokerTourLimitInfoDataSerializer } from "../serializers/PokerTourLimitInfoDataSerializer";
import { PokerTimeDataSerializer } from "../serializers/PokerTimeDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class SrvMultiTourInitializeDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvMultiTourInitializeData): void {
		var bitsReader = new BitsReader( buffer );
		
			BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			
            for (let i = 0, l = data.pokerTableInfoVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.pokerTableInfoVect[i];
				PokerTableInfoDataSerializer.serialize(buffer, temp);
            }
			buffer.setUint32( data.versionPokerTableInfo );
			
            for (let i = 0, l = data.addedPlayerInfoVector.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.addedPlayerInfoVector[i];
				PokerTournamentPlayerInfoDataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.changedPlayerInfoVector.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.changedPlayerInfoVector[i];
				PokerTournamentPlayerInfo1DataSerializer.serialize(buffer, temp);
            }
			
            for (let i = 0, l = data.removedPlayersVect.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.removedPlayersVect[i];
				buffer.setUint16( temp );
            }
			buffer.setUint32( data.versionPlayerInfoVector );
			buffer.setUint8( data.inPercent ? 1 : 0 );
			
            for (let i = 0, l = data.prizeSchemeInfos.length , t = buffer.setUint16( l ); i < l; i++){
                let temp = data.prizeSchemeInfos[i];
				PokerPrizeSchemeInfoRowDataSerializer.serialize(buffer, temp);
            }
			bitsReader.setBits( data.empty, 3 );
			bitsReader.setBit( data.isCompMoney );
			bitsReader.setBit( data.isRealMoney );
			bitsReader.setBit( data.hasReenters );
			bitsReader.setBit( data.hasAddons );
			bitsReader.setBit( data.hasRebuys );
			
            if (data.hasRebuys == true){
                buffer.setUint16( data.rebuys );
			
            }
			
            if (data.hasAddons == true){
                buffer.setUint16( data.addons );
			
            }
			
            if (data.hasReenters == true){
                buffer.setUint16( data.reenters );
			
            }
			PokerTourTimeInfoDataSerializer.serialize(buffer, data.tourTimeInfo);
			buffer.setUint8( data.currentLevel );
			PokerTourLimitInfoDataSerializer.serialize(buffer, data.currentLevelLimitInfo);
			buffer.setUint8( data.isCurrentLevelLast ? 1 : 0 );
			
            if (data.isCurrentLevelLast != true){
                PokerTimeDataSerializer.serialize(buffer, data.currentLevelEndDate);
			PokerTourLimitInfoDataSerializer.serialize(buffer, data.nextLevelLimitInfo);
			
            }
			buffer.setUint16( data.minPlayers );
			buffer.setUint8( data.lateRegistrationLevel );
			buffer.setUint16( data.remainingUnits );
			buffer.setUint16( data.winnerPlacesCount );
			buffer.setUTF16StringNullTerminated( data.longComment );
			bitsReader.setBit( data.useSyncBreak );
			bitsReader.setBit( data.convertToMoney );
			bitsReader.setBits( data.status, 6 );
			buffer.setUint32( data.prizeVersion );
			buffer.setUint32( data.incomesVersion );
			buffer.setUint32( data.timesVersion );
			buffer.setUint32( data.longCommentVersion );
			buffer.setUint32( data.levelVersion );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvMultiTourInitializeData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			
            data.pokerTableInfoVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerTableInfoData(data);
                PokerTableInfoDataSerializer.deserialize(buffer, temp);
                data.pokerTableInfoVect.push( temp );
            }
			data.versionPokerTableInfo = buffer.getUint32();
			
            data.addedPlayerInfoVector = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerTournamentPlayerInfoData(data);
                PokerTournamentPlayerInfoDataSerializer.deserialize(buffer, temp);
                data.addedPlayerInfoVector.push( temp );
            }
			
            data.changedPlayerInfoVector = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerTournamentPlayerInfo1Data(data);
                PokerTournamentPlayerInfo1DataSerializer.deserialize(buffer, temp);
                data.changedPlayerInfoVector.push( temp );
            }
			
            data.removedPlayersVect = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = buffer.getUint16();
                data.removedPlayersVect.push( temp );
            }
			data.versionPlayerInfoVector = buffer.getUint32();
			data.inPercent = buffer.getUint8() != 0;
			
            data.prizeSchemeInfos = []; 
            for (let i = 0, l = buffer.getUint16(); i < l; i++){
                let temp = new PokerPrizeSchemeInfoRowData(data);
                PokerPrizeSchemeInfoRowDataSerializer.deserialize(buffer, temp);
                data.prizeSchemeInfos.push( temp );
            }
			data.empty = bitsReader.getBits( 3 );
			data.isCompMoney = bitsReader.getBit() != 0;
			data.isRealMoney = bitsReader.getBit() != 0;
			data.hasReenters = bitsReader.getBit() != 0;
			data.hasAddons = bitsReader.getBit() != 0;
			data.hasRebuys = bitsReader.getBit() != 0;
			
            if (data.hasRebuys == true){
                data.rebuys = buffer.getUint16();
			
            }
			
            if (data.hasAddons == true){
                data.addons = buffer.getUint16();
			
            }
			
            if (data.hasReenters == true){
                data.reenters = buffer.getUint16();
			
            }
			data.tourTimeInfo = new PokerTourTimeInfoData(data); 
                        PokerTourTimeInfoDataSerializer.deserialize(buffer, data.tourTimeInfo);
			data.currentLevel = buffer.getUint8();
			data.currentLevelLimitInfo = new PokerTourLimitInfoData(data); 
                        PokerTourLimitInfoDataSerializer.deserialize(buffer, data.currentLevelLimitInfo);
			data.isCurrentLevelLast = buffer.getUint8() != 0;
			
            if (data.isCurrentLevelLast != true){
                data.currentLevelEndDate = new PokerTimeData(data); 
                        PokerTimeDataSerializer.deserialize(buffer, data.currentLevelEndDate);
			data.nextLevelLimitInfo = new PokerTourLimitInfoData(data); 
                        PokerTourLimitInfoDataSerializer.deserialize(buffer, data.nextLevelLimitInfo);
			
            }
			data.minPlayers = buffer.getUint16();
			data.lateRegistrationLevel = buffer.getUint8();
			data.remainingUnits = buffer.getUint16();
			data.winnerPlacesCount = buffer.getUint16();
			data.longComment = buffer.getUTF16StringNullTerminated();
			data.useSyncBreak = bitsReader.getBit() != 0;
			data.convertToMoney = bitsReader.getBit() != 0;
			data.status = bitsReader.getBits( 6 );
			data.prizeVersion = buffer.getUint32();
			data.incomesVersion = buffer.getUint32();
			data.timesVersion = buffer.getUint32();
			data.longCommentVersion = buffer.getUint32();
			data.levelVersion = buffer.getUint32();
			
	}
}
