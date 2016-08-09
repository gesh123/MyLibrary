
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvLogonChangeData } from "../data/SrvLogonChangeData";


export class SrvLogonChangeDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvLogonChangeData): void {
		var bitsReader = new BitsReader( buffer );
		
			bitsReader.setBit( data.validEmail );
			bitsReader.setBit( data.chatEnabled );
			bitsReader.setBit( data.realResult );
			buffer.setUint8( data.realMoneyType );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvLogonChangeData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.validEmail = bitsReader.getBit() != 0;
			data.chatEnabled = bitsReader.getBit() != 0;
			data.realResult = bitsReader.getBit() != 0;
			data.realMoneyType = buffer.getUint8();
			
	}
}
