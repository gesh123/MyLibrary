
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { ClRequestInstantRebuyData } from "../data/ClRequestInstantRebuyData";
import { PokerTourMoneyChooserData } from "../data/PokerTourMoneyChooserData";

import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { PokerTourMoneyChooserDataSerializer } from "../serializers/PokerTourMoneyChooserDataSerializer";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";



export class ClRequestInstantRebuyDataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: ClRequestInstantRebuyData): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.tourNetworkIDVO);
			buffer.setUint8( data.rebuysCount );
			PokerTourMoneyChooserDataSerializer.serialize(buffer, data.compsChoice);
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: ClRequestInstantRebuyData): void {
		data.tourNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.tourNetworkIDVO);
			data.rebuysCount = buffer.getUint8();
			data.compsChoice = new PokerTourMoneyChooserData(data); 
                        PokerTourMoneyChooserDataSerializer.deserialize(buffer, data.compsChoice);
			
	}
}
