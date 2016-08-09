
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerTournamentDetailsData } from "../data/PokerTournamentDetailsData";
import { PokerTournamentMoneyTypeData } from "../data/PokerTournamentMoneyTypeData";
import { PokerTourTimeInfoData } from "../data/PokerTourTimeInfoData";
import { PokerPrizesSummaryInfoData } from "../data/PokerPrizesSummaryInfoData";
import { PokerLevelsInfoData } from "../data/PokerLevelsInfoData";

import { PokerTournamentMoneyTypeDataSerializer } from "../serializers/PokerTournamentMoneyTypeDataSerializer";
import { PokerTourTimeInfoDataSerializer } from "../serializers/PokerTourTimeInfoDataSerializer";
import { PokerPrizesSummaryInfoDataSerializer } from "../serializers/PokerPrizesSummaryInfoDataSerializer";
import { PokerLevelsInfoDataSerializer } from "../serializers/PokerLevelsInfoDataSerializer";

import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PokerTournamentDetailsDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerTournamentDetailsData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBit( data.hasValidRebuyInfo );
			bitsReader.setBit( data.hasValidAddonInfo );
			bitsReader.setBit( data.hasValidReenterInfo );
			
            if (data.hasValidRebuyInfo == true){
                PokerTournamentMoneyTypeDataSerializer.serialize(buffer, data.rebuyAmount);
			OptimizedBinaryNumberSerializer.serialize( buffer, data.rebuyChips );
			
            }
			
            if (data.hasValidAddonInfo == true){
                PokerTournamentMoneyTypeDataSerializer.serialize(buffer, data.addOnAmount);
			OptimizedBinaryNumberSerializer.serialize( buffer, data.addOnChips );
			
            }
			
            if (data.hasValidReenterInfo == true){
                OptimizedBinaryNumberSerializer.serialize( buffer, data.reenterAmount );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.reenterBounty );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.reenterFee );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.reenterBeastFee );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.reenterChips );
			
            }
			OptimizedBinaryNumberSerializer.serialize( buffer, data.startingChips );
			PokerTourTimeInfoDataSerializer.serialize(buffer, data.tourTimeInfo);
			OptimizedBinaryNumberSerializer.serialize( buffer, data.stakeFirst );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.stakeSecond );
			buffer.setUint16( data.stakeChange );
			buffer.setUint16( data.maxRebuys );
			buffer.setUint16( data.rebuysUntilStake );
			buffer.setUint16( data.addonAfterStake );
			buffer.setUint16( data.numberOfWinners );
			PokerTournamentMoneyTypeDataSerializer.serialize(buffer, data.bounty);
			buffer.setUint16( data.endUnits );
			PokerPrizesSummaryInfoDataSerializer.serialize(buffer, data.prizesSummaryInfoVO);
			buffer.setUint8( data.useSyncBreaks ? 1 : 0 );
			PokerLevelsInfoDataSerializer.serialize(buffer, data.levelsInfoVO);
			buffer.setUTF16StringNullTerminated( data.shortComment );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerTournamentDetailsData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.hasValidRebuyInfo = bitsReader.getBit() != 0;
			data.hasValidAddonInfo = bitsReader.getBit() != 0;
			data.hasValidReenterInfo = bitsReader.getBit() != 0;
			
            if (data.hasValidRebuyInfo == true){
                data.rebuyAmount = new PokerTournamentMoneyTypeData(data); 
                        PokerTournamentMoneyTypeDataSerializer.deserialize(buffer, data.rebuyAmount);
			data.rebuyChips = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
            }
			
            if (data.hasValidAddonInfo == true){
                data.addOnAmount = new PokerTournamentMoneyTypeData(data); 
                        PokerTournamentMoneyTypeDataSerializer.deserialize(buffer, data.addOnAmount);
			data.addOnChips = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
            }
			
            if (data.hasValidReenterInfo == true){
                data.reenterAmount = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.reenterBounty = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.reenterFee = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.reenterBeastFee = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.reenterChips = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
            }
			data.startingChips = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.tourTimeInfo = new PokerTourTimeInfoData(data); 
                        PokerTourTimeInfoDataSerializer.deserialize(buffer, data.tourTimeInfo);
			data.stakeFirst = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.stakeSecond = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.stakeChange = buffer.getUint16();
			data.maxRebuys = buffer.getUint16();
			data.rebuysUntilStake = buffer.getUint16();
			data.addonAfterStake = buffer.getUint16();
			data.numberOfWinners = buffer.getUint16();
			data.bounty = new PokerTournamentMoneyTypeData(data); 
                        PokerTournamentMoneyTypeDataSerializer.deserialize(buffer, data.bounty);
			data.endUnits = buffer.getUint16();
			data.prizesSummaryInfoVO = new PokerPrizesSummaryInfoData(data); 
                        PokerPrizesSummaryInfoDataSerializer.deserialize(buffer, data.prizesSummaryInfoVO);
			data.useSyncBreaks = buffer.getUint8() != 0;
			data.levelsInfoVO = new PokerLevelsInfoData(data); 
                        PokerLevelsInfoDataSerializer.deserialize(buffer, data.levelsInfoVO);
			data.shortComment = buffer.getUTF16StringNullTerminated();
			
	}
}
