
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClSendUserPassData } from "../data/ClSendUserPassData";


export class ClSendUserPassDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClSendUserPassData): void {
		buffer.setUTF16StringNullTerminated( data.password );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClSendUserPassData): void {
		data.password = buffer.getUTF16StringNullTerminated();
			
	}
}
