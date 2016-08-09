
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerPlayerProfileData } from "../data/PokerPlayerProfileData";
import { PokerShortRankData } from "../data/PokerShortRankData";

import { PokerShortRankDataSerializer } from "../serializers/PokerShortRankDataSerializer";



export class PokerPlayerProfileDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerPlayerProfileData): void {
		buffer.setUint32( data.sex );
			buffer.setUTF16StringNullTerminated( data.city );
			buffer.setUTF16StringNullTerminated( data.country );
			buffer.setUTF16StringNullTerminated( data.favGameLimit );
			buffer.setUTF16StringNullTerminated( data.favHotel );
			buffer.setUTF16StringNullTerminated( data.favCardRoom );
			buffer.setUTF16StringNullTerminated( data.favStartHand );
			buffer.setUTF16StringNullTerminated( data.goals );
			buffer.setFloat64( data.memberSince );
			buffer.setFloat64( data.playingSince );
			buffer.setFloat64( data.birthDay );
			buffer.setUTF16StringNullTerminated( data.pictureCode );
			buffer.setUTF16StringNullTerminated( data.username );
			buffer.setUint16( data.rankPercentage );
			buffer.setUint16( data.rank );
			buffer.setFloat64( data.returnOfInvestmentPercentage );
			buffer.setUint32( data.inTheMoney );
			buffer.setUint32( data.tournamentsWonCount );
			buffer.setUint8( data.hideTableRanks ? 1 : 0 );
			
            if (data.hideTableRanks == false){
                PokerShortRankDataSerializer.serialize(buffer, data.shortRankStructure);
			
            }
			buffer.setUint8( data.hideTourRanks ? 1 : 0 );
			
            if (data.hideTourRanks == false){
                PokerShortRankDataSerializer.serialize(buffer, data.shortRankStructure);
			
            }
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerPlayerProfileData): void {
		data.sex = buffer.getUint32();
			data.city = buffer.getUTF16StringNullTerminated();
			data.country = buffer.getUTF16StringNullTerminated();
			data.favGameLimit = buffer.getUTF16StringNullTerminated();
			data.favHotel = buffer.getUTF16StringNullTerminated();
			data.favCardRoom = buffer.getUTF16StringNullTerminated();
			data.favStartHand = buffer.getUTF16StringNullTerminated();
			data.goals = buffer.getUTF16StringNullTerminated();
			data.memberSince = buffer.getFloat64();
			data.playingSince = buffer.getFloat64();
			data.birthDay = buffer.getFloat64();
			data.pictureCode = buffer.getUTF16StringNullTerminated();
			data.username = buffer.getUTF16StringNullTerminated();
			data.rankPercentage = buffer.getUint16();
			data.rank = buffer.getUint16();
			data.returnOfInvestmentPercentage = buffer.getFloat64();
			data.inTheMoney = buffer.getUint32();
			data.tournamentsWonCount = buffer.getUint32();
			data.hideTableRanks = buffer.getUint8() != 0;
			
            if (data.hideTableRanks == false){
                data.shortRankStructure = new PokerShortRankData(data); 
                        PokerShortRankDataSerializer.deserialize(buffer, data.shortRankStructure);
			
            }
			data.hideTourRanks = buffer.getUint8() != 0;
			
            if (data.hideTourRanks == false){
                data.shortRankStructure = new PokerShortRankData(data); 
                        PokerShortRankDataSerializer.deserialize(buffer, data.shortRankStructure);
			
            }
			
	}
}
