
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvUpdateTimeBankConfigData } from "../data/SrvUpdateTimeBankConfigData";


export class SrvUpdateTimeBankConfigDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvUpdateTimeBankConfigData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBits( data.timeBankReplenishmentHandCount, 10 );
			bitsReader.setBits( data.timeBankReplenishmentAmount, 10 );
			bitsReader.setBits( data.timeBankAmount, 10 );
			buffer.setUint16( data.timeBankMaxAmount );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvUpdateTimeBankConfigData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.timeBankReplenishmentHandCount = bitsReader.getBits( 10 );
			data.timeBankReplenishmentAmount = bitsReader.getBits( 10 );
			data.timeBankAmount = bitsReader.getBits( 10 );
			data.timeBankMaxAmount = buffer.getUint16();
			
	}
}
