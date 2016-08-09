
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvCompressedData } from "../data/SrvCompressedData";
import { BinaryRawData } from "../../core/data/BinaryRawData";

import { BinaryRawDataSerializer } from "../../core/serializers/BinaryRawDataSerializer";



export class SrvCompressedDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvCompressedData): void {
		buffer.setUint32( data.uncompressedSourceSize );
			buffer.setUint32( data.compressedSourceSize );
			BinaryRawDataSerializer.serialize(buffer, data.compressedSource);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvCompressedData): void {
		data.uncompressedSourceSize = buffer.getUint32();
			data.compressedSourceSize = buffer.getUint32();
			data.compressedSource = new BinaryRawData(data); 
                        BinaryRawDataSerializer.deserialize(buffer, data.compressedSource);
			
	}
}
