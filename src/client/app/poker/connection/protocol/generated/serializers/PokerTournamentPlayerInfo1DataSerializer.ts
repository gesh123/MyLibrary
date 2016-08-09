
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerTournamentPlayerInfo1Data } from "../data/PokerTournamentPlayerInfo1Data";
import { PokerShortRankData } from "../data/PokerShortRankData";

import { PokerShortRankDataSerializer } from "../serializers/PokerShortRankDataSerializer";

import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PokerTournamentPlayerInfo1DataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerTournamentPlayerInfo1Data): void {
		var bitsReader = new BitsReader( buffer );
		
			buffer.setUint16( data.localID );
			bitsReader.setBit( data.hasChips );
			bitsReader.setBit( data.hasPrize );
			bitsReader.setBit( data.isFinished );
			bitsReader.setBit( data.hasRank );
			
            if (data.hasChips == true){
                OptimizedBinaryNumberSerializer.serialize( buffer, data.chips );
			
            }
			
            if (data.hasPrize == true){
                buffer.setUTF16StringNullTerminated( data.prize );
			
            }
			
            if (data.isFinished == true){
                buffer.setUint16( data.finishedOnPlace );
			
            }
			
            if (data.hasRank == true){
                PokerShortRankDataSerializer.serialize(buffer, data.shortRankStructure);
			
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerTournamentPlayerInfo1Data): void {
		var bitsReader = new BitsReader( buffer );
		
			data.localID = buffer.getUint16();
			data.hasChips = bitsReader.getBit() != 0;
			data.hasPrize = bitsReader.getBit() != 0;
			data.isFinished = bitsReader.getBit() != 0;
			data.hasRank = bitsReader.getBit() != 0;
			
            if (data.hasChips == true){
                data.chips = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
            }
			
            if (data.hasPrize == true){
                data.prize = buffer.getUTF16StringNullTerminated();
			
            }
			
            if (data.isFinished == true){
                data.finishedOnPlace = buffer.getUint16();
			
            }
			
            if (data.hasRank == true){
                data.shortRankStructure = new PokerShortRankData(data); 
                        PokerShortRankDataSerializer.deserialize(buffer, data.shortRankStructure);
			
            }
			
	}
}
