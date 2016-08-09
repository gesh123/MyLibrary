
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvPlayerProfileData } from "../data/SrvPlayerProfileData";
import { PokerPlayerProfileData } from "../data/PokerPlayerProfileData";

import { PokerPlayerProfileDataSerializer } from "../serializers/PokerPlayerProfileDataSerializer";



export class SrvPlayerProfileDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvPlayerProfileData): void {
		buffer.setUint8( data.isValid ? 1 : 0 );
			PokerPlayerProfileDataSerializer.serialize(buffer, data.info);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvPlayerProfileData): void {
		data.isValid = buffer.getUint8() != 0;
			data.info = new PokerPlayerProfileData(data); 
                        PokerPlayerProfileDataSerializer.deserialize(buffer, data.info);
			
	}
}
