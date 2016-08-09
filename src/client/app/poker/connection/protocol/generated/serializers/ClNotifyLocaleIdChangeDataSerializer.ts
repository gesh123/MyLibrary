
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClNotifyLocaleIdChangeData } from "../data/ClNotifyLocaleIdChangeData";


export class ClNotifyLocaleIdChangeDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClNotifyLocaleIdChangeData): void {
		buffer.setUint32( data.localeId );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClNotifyLocaleIdChangeData): void {
		data.localeId = buffer.getUint32();
			
	}
}
