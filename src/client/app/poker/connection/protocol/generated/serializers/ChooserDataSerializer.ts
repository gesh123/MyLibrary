
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ChooserData } from "../data/ChooserData";


export class ChooserDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ChooserData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBit( data.moneyInCompoints );
			bitsReader.setBit( data.feeInCompoints );
			bitsReader.setBit( data.canConvertTB );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ChooserData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.moneyInCompoints = bitsReader.getBit() != 0;
			data.feeInCompoints = bitsReader.getBit() != 0;
			data.canConvertTB = bitsReader.getBit() != 0;
			
	}
}
