
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClSSLDataData } from "../data/ClSSLDataData";
import { BinaryRawData } from "../../core/data/BinaryRawData";

import { BinaryRawDataSerializer } from "../../core/serializers/BinaryRawDataSerializer";



export class ClSSLDataDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClSSLDataData): void {
		buffer.setUint32( data.sslDataLength );
			BinaryRawDataSerializer.serialize(buffer, data.sslData);
			buffer.setUint8( data.tlsType );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClSSLDataData): void {
		data.sslDataLength = buffer.getUint32();
			data.sslData = new BinaryRawData(data); 
                        BinaryRawDataSerializer.deserialize(buffer, data.sslData);
			data.tlsType = buffer.getUint8();
			
	}
}
