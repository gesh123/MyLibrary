
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClJackpotTourCancelRegRequestData } from "../data/ClJackpotTourCancelRegRequestData";
import { PokerRegisterJPTData } from "../data/PokerRegisterJPTData";

import { PokerRegisterJPTDataSerializer } from "../serializers/PokerRegisterJPTDataSerializer";



export class ClJackpotTourCancelRegRequestDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClJackpotTourCancelRegRequestData): void {
		PokerRegisterJPTDataSerializer.serialize(buffer, data.registerJPTVO);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClJackpotTourCancelRegRequestData): void {
		data.registerJPTVO = new PokerRegisterJPTData(data); 
                        PokerRegisterJPTDataSerializer.deserialize(buffer, data.registerJPTVO);
			
	}
}
