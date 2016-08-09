
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvAltCurrencyRateData } from "../data/SrvAltCurrencyRateData";


export class SrvAltCurrencyRateDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvAltCurrencyRateData): void {
		buffer.setANSIStringNullTerminated( data.currencyName );
			buffer.setFloat64( data.rate );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvAltCurrencyRateData): void {
		data.currencyName = buffer.getANSIStringNullTerminated();
			data.rate = buffer.getFloat64();
			
	}
}
