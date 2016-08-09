
import { ArrayBufferBuilder } from "../../../../utils/ArrayBufferBuilder";
import { BitsReader } from "../../../../utils/BitsReader";
import { SerializerUtils } from "../../../../utils/SerializerUtils";
import { PokerTableInfo1Data } from "../data/PokerTableInfo1Data";
import { BinaryNetworkID } from "../../core/data/BinaryNetworkID";

import { BinaryNetworkIDSerializer } from "../../core/serializers/BinaryNetworkIDSerializer";
import { OptimizedBinaryNumberSerializer } from "../../core/serializers/OptimizedBinaryNumberSerializer";



export class PokerTableInfo1DataSerializer {
	public static serialize(buffer: ArrayBufferBuilder, data: PokerTableInfo1Data): void {
		BinaryNetworkIDSerializer.serialize(buffer, data.gameNetworkIDVO);
			buffer.setUint8( data.playersCount );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.mostChips );
			OptimizedBinaryNumberSerializer.serialize( buffer, data.leastChips );
			
	}

	public static deserialize(buffer: ArrayBufferBuilder, data: PokerTableInfo1Data): void {
		data.gameNetworkIDVO = new BinaryNetworkID(data); 
                        BinaryNetworkIDSerializer.deserialize(buffer, data.gameNetworkIDVO);
			data.playersCount = buffer.getUint8();
			data.mostChips = OptimizedBinaryNumberSerializer.deserialize( buffer );
			data.leastChips = OptimizedBinaryNumberSerializer.deserialize( buffer );
			
	}
}
