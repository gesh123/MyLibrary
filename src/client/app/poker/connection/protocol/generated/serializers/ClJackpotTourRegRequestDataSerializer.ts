
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClJackpotTourRegRequestData } from "../data/ClJackpotTourRegRequestData";
import { PokerRegisterJPTData } from "../data/PokerRegisterJPTData";

import { PokerRegisterJPTDataSerializer } from "../serializers/PokerRegisterJPTDataSerializer";



export class ClJackpotTourRegRequestDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClJackpotTourRegRequestData): void {
		PokerRegisterJPTDataSerializer.serialize(buffer, data.registerJPTVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClJackpotTourRegRequestData): void {
		data.registerJPTVO = new PokerRegisterJPTData(data); 
                        PokerRegisterJPTDataSerializer.deserialize(buffer, data.registerJPTVO);
			
	}
}
