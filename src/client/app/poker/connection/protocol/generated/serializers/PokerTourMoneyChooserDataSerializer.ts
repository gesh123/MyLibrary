
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerTourMoneyChooserData } from "../data/PokerTourMoneyChooserData";


export class PokerTourMoneyChooserDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerTourMoneyChooserData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBit( data.moneyInComps );
			bitsReader.setBit( data.feeInComps );
			bitsReader.setBit( data.canConvertTB );
			bitsReader.setBit( data.isBeastFeeInComps );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerTourMoneyChooserData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.moneyInComps = bitsReader.getBit() != 0;
			data.feeInComps = bitsReader.getBit() != 0;
			data.canConvertTB = bitsReader.getBit() != 0;
			data.isBeastFeeInComps = bitsReader.getBit() != 0;
			
	}
}
