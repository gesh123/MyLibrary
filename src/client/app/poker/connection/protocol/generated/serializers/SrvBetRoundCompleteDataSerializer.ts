
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvBetRoundCompleteData } from "../data/SrvBetRoundCompleteData";
import { PotInfoData } from "../data/PotInfoData";

import { PotInfoDataSerializer } from "../serializers/PotInfoDataSerializer";

import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class SrvBetRoundCompleteDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvBetRoundCompleteData): void {
		var bitsReader = new BitsReader( buffer );
		
			buffer.setUint8( data.round );
			PotInfoDataSerializer.serialize(buffer, data.potInfo);
			bitsReader.setBit( data.showCheckBoxes );
			bitsReader.setBits( data.dummyBits1, 3 );
			bitsReader.setBit( data.moveChips );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.rake );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.jackpotFee );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.allowedBet );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvBetRoundCompleteData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.round = buffer.getUint8();
			data.potInfo = new PotInfoData(data); 
                        PotInfoDataSerializer.deserialize(buffer, data.potInfo);
			data.showCheckBoxes = bitsReader.getBit() != 0;
			data.dummyBits1 = bitsReader.getBits( 3 );
			data.moveChips = bitsReader.getBit() != 0;
			data.rake = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.jackpotFee = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.allowedBet = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
