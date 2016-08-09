
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvLogonOkData } from "../data/SrvLogonOkData";


export class SrvLogonOkDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvLogonOkData): void {
		var bitsReader = new BitsReader( buffer );
		
			buffer.setUTF16StringNullTerminated( data.username );
			buffer.setUTF16StringNullTerminated( data.nickname );
			buffer.setUTF16StringNullTerminated( data.password );
			buffer.setUint8( data.previousSeatID );
			bitsReader.setBit( data.chatEnabled );
			bitsReader.setBit( data.validEmail );
			bitsReader.setBit( data.forceChangePassword );
			buffer.setUTF16StringNullTerminated( data.emailHash );
			buffer.setUint8( data.accountStatus );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvLogonOkData): void {
		var bitsReader = new BitsReader( buffer );
		
			data.username = buffer.getUTF16StringNullTerminated();
			data.nickname = buffer.getUTF16StringNullTerminated();
			data.password = buffer.getUTF16StringNullTerminated();
			data.previousSeatID = buffer.getUint8();
			data.chatEnabled = bitsReader.getBit() != 0;
			data.validEmail = bitsReader.getBit() != 0;
			data.forceChangePassword = bitsReader.getBit() != 0;
			data.emailHash = buffer.getUTF16StringNullTerminated();
			data.accountStatus = buffer.getUint8();
			
	}
}
