
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvSessionCreatedData } from "../data/SrvSessionCreatedData";


export class SrvSessionCreatedDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvSessionCreatedData): void {
		buffer.setInt32( data.pageID );
			buffer.setUTF16StringNullTerminated( data.session );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvSessionCreatedData): void {
		data.pageID = buffer.getInt32();
			data.session = buffer.getUTF16StringNullTerminated();
			
	}
}
