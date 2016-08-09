
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvSSLDataData } from "../data/SrvSSLDataData";
import { BinaryRawData } from "../../core/data/BinaryRawData";

import { BinaryRawDataSerializer } from "../../core/serializers/BinaryRawDataSerializer";



export class SrvSSLDataDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvSSLDataData): void {
		buffer.setUint32( data.sslDataLength );
			BinaryRawDataSerializer.serialize(buffer, data.sslData);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvSSLDataData): void {
		data.sslDataLength = buffer.getUint32();
			data.sslData = new BinaryRawData(data); 
                        BinaryRawDataSerializer.deserialize(buffer, data.sslData);
			
	}
}
