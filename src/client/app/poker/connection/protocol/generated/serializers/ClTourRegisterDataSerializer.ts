
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClTourRegisterData } from "../data/ClTourRegisterData";
import { PokerTourMoneyChooserData } from "../data/PokerTourMoneyChooserData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTourMoneyChooserDataSerializer } from "../serializers/PokerTourMoneyChooserDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClTourRegisterDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClTourRegisterData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUTF16StringNullTerminated( data.password );
			PokerTourMoneyChooserDataSerializer.serialize(buffer, data.compsChoice);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClTourRegisterData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.password = buffer.getUTF16StringNullTerminated();
			data.compsChoice = new PokerTourMoneyChooserData(data); 
                        PokerTourMoneyChooserDataSerializer.deserialize(buffer, data.compsChoice);
			
	}
}
