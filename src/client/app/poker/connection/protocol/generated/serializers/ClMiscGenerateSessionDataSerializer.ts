
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClMiscGenerateSessionData } from "../data/ClMiscGenerateSessionData";


export class ClMiscGenerateSessionDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClMiscGenerateSessionData): void {
		buffer.setInt32( data.pageID );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClMiscGenerateSessionData): void {
		data.pageID = buffer.getInt32();
			
	}
}
