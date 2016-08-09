
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { SrvGetExtraMoneyReplyData } from "../data/SrvGetExtraMoneyReplyData";
import { PokerExtraMoneyResponseData } from "../data/PokerExtraMoneyResponseData";

import { PokerExtraMoneyResponseDataSerializer } from "../serializers/PokerExtraMoneyResponseDataSerializer";



export class SrvGetExtraMoneyReplyDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: SrvGetExtraMoneyReplyData): void {
		PokerExtraMoneyResponseDataSerializer.serialize(buffer, data.extraMoneyReplay);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: SrvGetExtraMoneyReplyData): void {
		data.extraMoneyReplay = new PokerExtraMoneyResponseData(data); 
                        PokerExtraMoneyResponseDataSerializer.deserialize(buffer, data.extraMoneyReplay);
			
	}
}
