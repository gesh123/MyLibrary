
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClGetPlayerProfileData } from "../data/ClGetPlayerProfileData";


export class ClGetPlayerProfileDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClGetPlayerProfileData): void {
		buffer.setUTF16StringNullTerminated( data.userName );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClGetPlayerProfileData): void {
		data.userName = buffer.getUTF16StringNullTerminated();
			
	}
}
